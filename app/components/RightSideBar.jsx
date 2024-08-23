"use client";
import assets from "@public/assets/assets";
import React, { useEffect, useState } from "react";
import { FaRegFileAlt } from "react-icons/fa";
import { LuImage } from "react-icons/lu";
import { BiSolidVideos } from "react-icons/bi";
import ChatMediaDropdown from "./ChatMediaDropdown";
import { useSession } from "next-auth/react";
import GetColor from "./GetColor";
import moment from "moment";
import { HiUserGroup } from "react-icons/hi";
import { Skeleton } from "@/components/ui/skeleton";
import { checkUserStatus } from "@app/hooks/UserUpdateLastSeen";
import { FiEdit3 } from "react-icons/fi";
import { ClipLoader } from "react-spinners";
import { MdOutlineAddAPhoto } from "react-icons/md";
import { IoMdArrowBack } from "react-icons/io";

import { CldUploadWidget } from "next-cloudinary";
import { pusherClient } from "@lib/pusher";

const RightSideBar = ({ chatId }) => {
  const [images, setImages] = useState(false);
  const [docs, setDocs] = useState(false);
  const [videos, setVideos] = useState(false);
  const [members, setMembers] = useState([]);
  const [chat, setChat] = useState();
  const [isOnline, setIsOnline] = useState(false);
  const [loading, setLoading] = useState(true);
  const [allImages, setAllImages] = useState([]);
  const [editBox, setEditBox] = useState(false);
  const [groupName, setGroupName] = useState("");
  const [groupPhoto, setGroupPhoto] = useState("");
  const [upload, setUpload] = useState(false);
  const { data: session } = useSession();
  const currentUser = session?.user;

  const getChatDetail = async () => {
    try {
      const res = await fetch(`/api/chats/${chatId}`);
      const chat = await res.json();
      setChat(chat);
      let photosArray = [];
      setGroupName(chat?.isGroup && chat?.name);
      setGroupPhoto(chat?.isGroup && chat?.groupPhoto);
      chat?.messages.forEach((chat) => {
        if (chat?.photo && chat?.photo !== "") {
          photosArray.push(chat?.photo);
          setAllImages(photosArray);
        }
      });

      if (!chat?.isGroup) {
        setMembers(
          chat?.members?.filter((member) => member._id !== currentUser?.id)
        );
      } else {
        setMembers(chat?.members);
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const updateGroupInfo = async () => {
    try {
      setUpload(true);
      const res = await fetch(`/api/chats/${chatId}/update`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: groupName,
          groupPhoto,
        }),
      });
      setUpload(false);
      if (res?.ok) {
        getChatDetail();
        setEditBox(false);
      }
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
    getChatDetail();
  }, [currentUser]);

  useEffect(() => {
    pusherClient.subscribe(chatId);

    const updateImages = (message) => {
      if (message?.newMessage?.photo && message?.newMessage?.photo !== "") {
        setAllImages((prevImages) => [
          ...prevImages,
          message?.newMessage?.photo,
        ]);
      }
    };

    pusherClient.bind("new-message", updateImages);

    return () => {
      pusherClient.unsubscribe(chatId);
      pusherClient.unbind("new-message", updateImages);
    };
  }, [currentUser, chatId]);

  return (
    <div className="overflow-x-hidden bg-white rounded-lg  h-full">
      <div className="h-[50%]  relative ">
        <div className="flex-col flex items-center pt-4 relative">
          {loading ? (
            <Skeleton className="w-20 h-20  mb-2 rounded-full" />
          ) : chat?.isGroup ? (
            groupPhoto ? (
              <img
                src={groupPhoto}
                className="w-20 h-20 object-cover border rounded-full mb-2"
              ></img>
            ) : (
              <div
                className={`w-20 h-20 rounded-full text-2xl capitalize mb-2 flex justify-center items-center text-white ${GetColor(
                  chat?.name
                )}`}
              >
                <HiUserGroup className="text-[32px]"></HiUserGroup>
              </div>
            )
          ) : members[0]?.profileImage ? (
            <img
              src={members[0]?.profileImage}
              className="w-20 h-20 object-cover rounded-full mb-2"
            ></img>
          ) : (
            <div
              className={`w-20 h-20 text-2xl mb-2 rounded-full capitalize flex justify-center items-center text-white ${GetColor(
                members[0]?.username
              )}`}
            >
              {members[0]?.username.charAt()}
            </div>
          )}

          {loading ? (
            <div className="flex gap-x-3">
              <Skeleton className="h-3 w-40"></Skeleton>{" "}
              <Skeleton className="h-3 w-20"></Skeleton>
            </div>
          ) : (
            <div className="flex items-center ">
              <div className="">
                {chat?.isGroup ? (
                  editBox ? (
                    <div
                      className="font-semibold flex lg:flex-row flex-col gap-y-2 max-lg:mt-2
                     items-center gap-x-1"
                    >
                      <IoMdArrowBack
                        onClick={() => setEditBox(false)}
                        className="text-softtext/70 cursor-pointer text-2xl absolute z-50 top-5 left-5 "
                      />

                      <input
                        type="text"
                        placeholder="Group Name"
                        value={groupName}
                        onChange={(e) => setGroupName(e.target.value)}
                        className="input_field border"
                      ></input>
                      <button
                        onClick={updateGroupInfo}
                        className="bg-green-400 px-5 lg:px-3 py-2 flex justify-center items-center gap-x-2 shadow-lg text-sm rounded-full text-white"
                      >
                        Save{" "}
                        {upload && (
                          <ClipLoader size={14} color="#ffff"></ClipLoader>
                        )}
                      </button>
                    </div>
                  ) : (
                    <div className="font-semibold flex items-center gap-x-3">
                      {chat?.name}{" "}
                      <FiEdit3
                        onClick={() => setEditBox(true)}
                        className=" cursor-pointer text-softtext"
                      />{" "}
                    </div>
                  )
                ) : (
                  <h2 className="font-semibold">{members[0]?.username}</h2>
                )}
              </div>
              {!chat?.isGroup && isOnline && (
                <>
                  <img
                    src={assets.green_dot}
                    className="w-3 h-3 animate-pulse ml-2"
                  />
                  <span className="text-[12px] text-[#c4c4c4]">Online</span>
                </>
              )}
            </div>
          )}

          {loading ? (
            <Skeleton className="w-40 h-3 mt-3" />
          ) : (
            !chat?.isGroup && (
              <p className="text-[12px] text-[#c4c4c4]">{members[0]?.bio}</p>
            )
          )}

          <CldUploadWidget
            onSuccess={({ event, info }) => {
              if (event === "success") {
                setGroupPhoto(info?.secure_url);
              }
            }}
            uploadPreset="yubtmliv"
          >
            {({ open }) => (
              <button
                onClick={() => open()}
                className={`absolute ${
                  !editBox && "hidden"
                } lg:top-11 top-10 text-2xl right-14 lg:right-20 text-softtext`}
              >
                <MdOutlineAddAPhoto></MdOutlineAddAPhoto>
              </button>
            )}
          </CldUploadWidget>
        </div>
        <hr className="mt-3" />

        {chat?.isGroup ? (
          <div>
            <div className="flex justify-between items-center px-3 py-2">
              <p className="text-[#c4c4c4] text-sm text-start font-semibold">
                Group Members
              </p>
              {loading ? (
                <Skeleton className="h-2 w-24" />
              ) : (
                <p className="text-[12px]">
                  {moment(chat?.createdAt).format("llll")}
                </p>
              )}
            </div>
            <div className="flex gap-2 px-3 items-center flex-wrap">
              {loading
                ? Array(6)
                    .fill("")
                    .map((item, index) => (
                      <Skeleton key={index} className="h-5 w-20 rounded-md" />
                    ))
                : chat?.members.map((member, index) => (
                    <p
                      key={index}
                      className={`${GetColor(
                        member?.username
                      )} px-2 py-1 rounded-md shadow-md text-sm text-white`}
                    >
                      {member?.username}
                    </p>
                  ))}
            </div>
          </div>
        ) : (
          <div className="px-3 mt-2">
            <div className="flex   max-md:items-start flex-col mb-2 ">
              <h4 className="text-sm text-[#c4c4c4] font-semibold">Email</h4>
              {loading ? (
                <Skeleton className="h-3 mt-1 w-44" />
              ) : (
                <p className="text-sm font-medium">{members[0]?.email}</p>
              )}
            </div>

            <div className="flex max-md:items-start  flex-col">
              <h4 className="text-sm text-[#c4c4c4] font-semibold">Phone#</h4>
              {loading ? (
                <Skeleton className="h-3 mt-1 w-40" />
              ) : (
                <p className="text-sm font-medium">{members[0]?.phone}</p>
              )}
            </div>
          </div>
        )}
      </div>

      <div className="mt-3 h-[45%] px-1">
        <p className="text-sm px-3 text-start font-semibold text-[#c4c4c4]">
          Shared Files
        </p>
        <div className="max-h-[38vh] min-h-[38vh]  outline-none overflow-y-scroll scrollbar-hide">
          <ChatMediaDropdown
            open={docs}
            setOpen={setDocs}
            icon={<FaRegFileAlt className="mt-1 text-2xl"></FaRegFileAlt>}
            bg="bg-sky-100"
            title="Documents"
            color={"text-sky-500"}
          />
          <ChatMediaDropdown
            open={images}
            setOpen={setImages}
            icon={<LuImage className="mt-1 text-2xl" />}
            bg="bg-pink-100"
            color={"text-pink-500"}
            data={allImages}
            title="Images"
          />

          <ChatMediaDropdown
            open={videos}
            setOpen={setVideos}
            icon={<BiSolidVideos className="mt-1 text-2xl" />}
            bg="bg-green-100"
            color={"text-green-500"}
            title="Videos"
          />
        </div>
      </div>
    </div>
  );
};

export default RightSideBar;
