"use client";
import React, { useEffect, useRef, useState } from "react";
import GetColor from "./GetColor";
import { HiUserGroup } from "react-icons/hi";
import { IoMdImages } from "react-icons/io";
import { BsEmojiAstonished } from "react-icons/bs";
import { BsFillSendFill } from "react-icons/bs";
import { MdOutlineNavigateNext } from "react-icons/md";
import { CldUploadWidget } from "next-cloudinary";
import MessageBox from "@app/components/MessageBox";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import RightSideBar from "./RightSideBar";
import { useSession } from "next-auth/react";
import ImageSlider from "./ImageSlider";
import assets from "@public/assets/assets";
import { checkUserStatus } from "@app/hooks/UserUpdateLastSeen";
import moment from "moment";
import { pusherClient } from "@lib/pusher";
import Picker from "@emoji-mart/react";
import data from "@emoji-mart/data";
const ChatDetail = ({ chatId }) => {
  const [chat, setChat] = useState({});
  const [members, setMembers] = useState([]);
  const [text, setText] = useState("");
  const [chatPhotos, setChatPhotos] = useState([]);
  const [imageIndex, setImageIndex] = useState(null);
  const [isOnline, setIsOnline] = useState(false);
  const [showPicker, setShowPicker] = useState(false);

  const { data: session, status } = useSession();
  const currentUser = session?.user;

  const messagesContainerRef = useRef();
  const lastSeen = members[0]?.lastSeen;

  const getChatDetail = async () => {
    try {
      const res = await fetch(`/api/chats/${chatId}`);
      const chat = await res.json();
      setChat(chat);

      let photos = [];

      chat?.messages.forEach((chat) => {
        if (chat?.photo && chat?.photo !== "") {
          photos.push(chat?.photo);
          setChatPhotos(photos);
        }
      });

      setMembers(
        chat?.members?.filter((member) => member._id !== currentUser?.id)
      );
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const updateStatus = async () => {
      const onlineStatus = await checkUserStatus({ members });
      setIsOnline(onlineStatus);
    };

    updateStatus(); // Initial check

    const intervalId = setInterval(updateStatus, 60000); // Check status every minute

    return () => clearInterval(intervalId); // Cleanup on unmount
  }, [members]);

  useEffect(() => {
    if (currentUser) {
      getChatDetail();
    }
  }, [currentUser]);

  useEffect(() => {
    if (messagesContainerRef.current) {
      messagesContainerRef.current.scrollTop =
        messagesContainerRef.current.scrollHeight;
    }
  }, [chat?.messages]);

  const sendText = async (e) => {
    e.preventDefault();
    if (!text.trim() || !currentUser?.id) {
      return;
    }
    try {
      setText("");
      setShowPicker(false);
      await fetch("/api/messages", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          text,
          currentUserId: currentUser.id,
          chatId,
        }),
      });
    } catch (error) {
      console.log(error);
    }
  };

  const sendPhoto = async ({ event, info }) => {
    if (status !== "authenticated" || !currentUser?.id) {
      console.error("User is not authenticated or user ID is missing");
      return;
    }

    try {
      if (event === "success") {
        const res = await fetch("/api/messages", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            photo: info?.secure_url,
            currentUserId: currentUser.id,
            chatId: chatId,
          }),
        });

        if (res.ok) {
          console.log("Photo sent successfully");
        } else {
          console.error("Failed to send photo");
        }
      }
    } catch (error) {
      console.error("Error in sendPhoto:", error);
    }
  };

  const formatLastSeen = (date) => {
    const today = moment().startOf("day");
    const lastSeenDate = moment(date);

    if (lastSeenDate.isSame(today, "d")) {
      // If the last seen is today, show "Today 12:39 PM"
      return `Today ${lastSeenDate.format("h:mm A")}`;
    } else if (lastSeenDate.isSame(today.subtract(1, "days"), "d")) {
      // If the last seen is yesterday, show "Yesterday 2:23 PM"
      return `Yesterday ${lastSeenDate.format("h:mm A")}`;
    } else {
      // If the last seen is before yesterday, show "Tuesday 2:23 PM"
      return lastSeenDate.format("dddd h:mm A");
    }
  };

  const onEmojiClick = (e) => {
    const emoji = e.native;
    setText((prevText) => prevText + emoji);
  };

  useEffect(() => {
    pusherClient.subscribe(chatId);
    const handleMessage = async (newMessage) => {
      setChat((prevChat) => {
        return {
          ...prevChat,
          messages: [...prevChat.messages, newMessage?.newMessage],
        };
      });
    };

    const handleAddReaction = (updatedMessage) => {
      setChat((prevChat) => ({
        ...prevChat,
        messages: prevChat.messages.map((message) =>
          message._id === updatedMessage.id ? updatedMessage.message : message
        ),
      }));
    };

    const handleRemoveReaction = (removeReaction) => {
      setChat((prevChat) => ({
        ...prevChat,
        messages: prevChat.messages.map((msg) =>
          msg?._id === removeReaction?.messageId
            ? {
                ...msg,
                reaction: msg.reaction?.filter(
                  (r) => r?._id !== removeReaction?.reactionId
                ),
              }
            : msg
        ),
      }));
    };

    pusherClient.bind("add-reaction", handleAddReaction);
    pusherClient.bind("remove-reaction", handleRemoveReaction);

    pusherClient.bind("new-message", handleMessage);

    return () => {
      pusherClient.unsubscribe(chatId);
      pusherClient.unbind("new-message", handleMessage);
      pusherClient.unbind("add-reaction", handleAddReaction);
      pusherClient.unbind("remove-reaction", handleRemoveReaction);
    };
  }, [chatId]);

  return (
    <div className="w-full h-full  flex flex-col  bg-transparent relative">
      <div className="py-3 lg:py-2 px-3 flex items-center justify-between">
        <div className="flex items-center gap-x-3">
          {chat?.isGroup ? (
            chat?.groupPhoto ? (
              <img
                className="w-10 h-10 rounded-full object-cover"
                src={chat?.groupPhoto}
              ></img>
            ) : (
              <div
                className={`w-10 h-10 text-xl rounded-full flex text-white capitalize justify-center items-center ${GetColor(
                  chat?.name
                )}`}
              >
                <HiUserGroup />
              </div>
            )
          ) : members[0]?.profileImage ? (
            <img
              className="w-10 h-10 rounded-full object-cover"
              src={members[0]?.profileImage}
            ></img>
          ) : (
            <div
              className={`w-10 h-10 text-xl rounded-full capitalize text-white flex justify-center items-center ${GetColor(
                members[0]?.username
              )}`}
            >
              {members[0]?.username.charAt()}
            </div>
          )}
          {chat?.isGroup ? (
            <p>{chat?.name}</p>
          ) : (
            <div className="flex flex-col">
              <p>{members[0]?.username}</p>
              {isOnline ? (
                <div className="flex  items-center">
                  <p className="text-[11px] text-softtext">Online</p>
                  <img
                    src={assets.green_dot}
                    className="w-3 h-3 animate-pulse"
                    alt="online dot"
                  ></img>
                </div>
              ) : (
                <p className="text-[11px] text-softtext">
                  {currentUser && formatLastSeen(lastSeen)}
                </p>
              )}
            </div>
          )}
        </div>

        <Sheet className="lg:hi">
          <SheetTrigger>
            <MdOutlineNavigateNext className="text-xl lg:hidden bg-gray-100 mr-2 rounded-full" />
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <RightSideBar chatId={chatId} />
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>

      {/* Chat Section */}
      <div
        ref={messagesContainerRef}
        className="flex-1 flex outline-none flex-col py-4 lg:py-6   pl-3 pr-4 scrollbar-hide  lg:max-h-[69vh] lg:min-h-[69vh] max-lg:min-h-[86vh] max-lg:max-h-[86vh] overflow-y-scroll"
      >
        {chat?.messages?.map((message, index) => (
          <MessageBox
            message={message}
            currentUser={currentUser}
            isGroup={chat?.isGroup}
            members={members}
            key={index}
            setChat={setChat}
            chatPhotos={chatPhotos}
            setImageIndex={setImageIndex}
            chatId={chatId}
          />
        ))}
        {showPicker && (
          <div className="absolute bottom-16 ">
            <Picker
              style={{ height: "300px" }}
              data={data}
              onEmojiSelect={onEmojiClick}
            />
          </div>
        )}
      </div>
      {/* Chat Section end */}

      {/* images slider  */}
      <ImageSlider
        images={chatPhotos}
        imageIndex={imageIndex}
        setImageIndex={setImageIndex}
      />
      {/* images slider end */}

      {/* chat controls input , buttons */}

      <div className="py-3 lg:py-2 px-4  flex items-center gap-x-3  ">
        {currentUser?.id && (
          <CldUploadWidget onSuccess={sendPhoto} uploadPreset="yubtmliv">
            {({ open }) => (
              <IoMdImages
                onClick={() => open()}
                className="text-2xl text-softtext"
              ></IoMdImages>
            )}
          </CldUploadWidget>
        )}

        <form
          onSubmit={sendText}
          className="w-full flex items-center gap-x-4 max-md:pr-2"
        >
          <input
            type="text"
            placeholder="Write a message"
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="flex-1 input_field bg-white"
          />
          <span>
            <BsEmojiAstonished
              onClick={() => setShowPicker((val) => !val)}
              className="text-softtext cursor-pointer"
            />
          </span>
          <button className="text-orange" type="submit" disabled={!text.trim()}>
            <BsFillSendFill className="text-xl " />
          </button>
        </form>
      </div>
      {/* chat controls input , buttons  end*/}
    </div>
  );
};

export default ChatDetail;
