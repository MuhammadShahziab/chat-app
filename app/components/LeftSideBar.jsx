"use client";
import React, { useEffect, useState } from "react";
import { FiSearch } from "react-icons/fi";
import ChatBox from "./ChatBox";
import { BiMessageSquareAdd } from "react-icons/bi";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import assets from "@public/assets/assets";
import { MdOutlineGroupAdd } from "react-icons/md";
import { IoIosAddCircle } from "react-icons/io";
import { HiDotsVertical } from "react-icons/hi";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import ContactBox from "./ContactBox";
import { ClipLoader } from "react-spinners";
import GetColor from "./GetColor";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { Skeleton } from "@/components/ui/skeleton";
import { RiLogoutCircleRLine } from "react-icons/ri";
import { MdOutlinePerson } from "react-icons/md";
import { pusherClient } from "@lib/pusher";

const LeftSideBar = ({ chatId }) => {
  const { data: session } = useSession();
  const currentUser = session?.user;
  const [contacts, setContacts] = useState([]);
  const [searchContacts, setSearchContacts] = useState("");

  const [searchChat, setSearchChat] = useState("");
  const [createGroup, setCreateGroup] = useState(false);
  const [selectedContacts, setSelectedContacts] = useState([]);
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);
  const [chats, setChat] = useState([]);
  const isGroup = selectedContacts.length > 1;
  const [pageLoading, setPageLoading] = useState(true);
  const router = useRouter();

  const getContacts = async () => {
    try {
      const res = await fetch(
        searchContacts
          ? `/api/users/searchContacts/${searchContacts} `
          : "/api/users"
      );
      const data = await res.json();
      setContacts(data.filter((item) => item._id !== currentUser.id));
      setPageLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const getChat = async () => {
    try {
      const res = await fetch(
        searchChat !== ""
          ? `/api/users/${currentUser?.id}/searchChat/${searchChat}`
          : `/api/users/${currentUser?.id}`
      );
      const data = await res.json();
      setChat(data);
      setPageLoading(false);
    } catch (error) {
      consle.log(error);
    }
  };

  useEffect(() => {
    if (currentUser) {
      getChat();
    }
  }, [currentUser, searchChat]);

  useEffect(() => {
    if (currentUser) {
      getContacts();
    }
  }, [currentUser, searchContacts]);

  const handleLogout = async () => {
    try {
      await signOut({ callbackUrl: "https://chat-app-nu-navy-90.vercel.app/" });
    } catch (error) {
      console.log(error);
    }
  };

  const handleCreateGroup = async () => {
    try {
      setLoading(true);
      const res = await fetch("/api/chats", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          currentUserId: currentUser.id,
          isGroup,
          name,
          members: selectedContacts?.map((item) => item._id),
        }),
      });
      const chat = await res.json();
      if (res?.ok) {
        toast.success("Created");
        router.push(`/chats/${chat?._id}`);
      } else {
        toast.error(chat.error);
      }
    } catch (error) {
      console.log(error, "group cs");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (currentUser) {
      pusherClient.subscribe(currentUser?.id);
      const handleChatUpdate = (updatedChat) => {
        setChat((allChats) => {
          const newChats = allChats.map((chat) => {
            if (chat._id === updatedChat.id) {
              return {
                ...chat,
                messages: updatedChat.message,
                lastMessageAt: new Date(updatedChat.message[0].createdAt),
              };
            } else {
              return chat;
            }
          });

          // Move the updated chat to the top
          const updatedChatIndex = newChats.findIndex(
            (chat) => chat._id === updatedChat.id
          );
          if (updatedChatIndex > -1) {
            const [updatedChatObj] = newChats.splice(updatedChatIndex, 1);
            newChats.unshift(updatedChatObj);
          }

          return newChats;
        });
      };

      const handleNewMessage = (newMessage) => {
        setChat((allChats) => {
          const chatIndex = allChats.findIndex(
            (chat) => chat._id === newMessage.id
          );
          if (chatIndex !== -1) {
            const updatedChat = {
              ...allChats[chatIndex],
              messages: [
                ...allChats[chatIndex].messages,
                newMessage.newMessage,
              ],
              lastMessageAt: new Date(newMessage.newMessage.createdAt),
            };

            const newChats = [...allChats];
            newChats[chatIndex] = updatedChat;

            // Move the updated chat to the top
            const [updatedChatObj] = newChats.splice(chatIndex, 1);
            newChats.unshift(updatedChatObj);

            return newChats;
          }
          return allChats;
        });
      };

      const handleNewChat = (newChat) => {
        setChat((prevChat) => [...prevChat, newChat]);
      };

      const handleGroupProfile = (groupProfile) => {
        console.log(groupProfile, "chekc real time group profile");
        setChat((prevChat) =>
          prevChat.map((chat) =>
            chat?._id === groupProfile?._id
              ? { ...chat, ...groupProfile }
              : chat
          )
        );
      };
      pusherClient.bind("update-chat", handleChatUpdate);
      pusherClient.bind("new-chat", handleNewChat);
      pusherClient.bind("new-message", handleNewMessage);
      pusherClient.bind("update-group-profile", handleGroupProfile);

      return () => {
        pusherClient.unsubscribe(currentUser?.id);
        pusherClient.unbind("update-chat");
        pusherClient.unbind("new-message", handleNewMessage);
        pusherClient.unbind("update-group-profile", handleGroupProfile);
        pusherClient.unbind("new-chat");
      };
    }
  }, [currentUser]);

  return (
    <div className="w-full max-md:min-h-screen lg:max-h-[88vh] lg:min-h-[88vh] rounded-lg  flex-col flex bg-white  relative">
      <div className="flex relative  justify-star gap-x-4 pb-2 items-center  pl-4 pt-4">
        <Link href={"/profile"}>
          {pageLoading ? (
            <Skeleton className="w-14 h-14 rounded-full" />
          ) : currentUser?.profileImage ? (
            <img
              src={currentUser?.profileImage}
              className="w-14 aspect-square rounded-full cursor-pointer"
            />
          ) : (
            <div
              className={`w-14 h-14 rounded-full flex justify-center text-xl text-white items-center capitalize ${GetColor(
                currentUser?.username
              )}`}
            >
              {currentUser?.username.charAt()}
            </div>
          )}
        </Link>
        <div className="">
          <div className="flex items-center gap-x-1">
            {pageLoading ? (
              <Skeleton className="h-3 w-24" />
            ) : (
              <>
                <span>{currentUser?.username}</span>
                <img
                  src="/assets/green_dot.png"
                  className="w-3 h-3 animate-pulse"
                />
              </>
            )}
          </div>
          {pageLoading ? (
            <Skeleton className="h-3 w-40 mt-3" />
          ) : (
            <span className="text-[12px] text-[#c4c4c4]">
              {currentUser?.bio}
            </span>
          )}
        </div>
        <DropdownMenu className="mr-5 bg-red-500">
          <DropdownMenuTrigger>
            <HiDotsVertical className="absolute text-softtext right-7 lg:right-3 top-[28px]"></HiDotsVertical>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <Link href="/profile">
              <DropdownMenuItem className="flex cursor-pointer items-center gap-x-2">
                <MdOutlinePerson className="text-green-500" /> Profile
              </DropdownMenuItem>
            </Link>

            <DropdownMenuItem
              onClick={handleLogout}
              className="flex items-center cursor-pointer gap-x-2"
            >
              <RiLogoutCircleRLine className="text-red-500" />
              Logout
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="input px-4 mt-1 md:px-2 py-2 mx-3">
        <input
          type="text"
          className="w-full text-sm bg-transparent outline-none"
          placeholder="Search Chats"
          value={searchChat}
          onChange={(e) => setSearchChat(e.target.value)}
        />
        <FiSearch className="text-orange text-xl" />
      </div>

      <div
        className="overflow-y-scroll outline-none max-lg:scrollbar-hide px-2 mt-3 flex max-md:pt-3 gap-y-1 flex-col h-full 
      lg:h-[73%]"
      >
        {chats?.map((chat, index) => (
          <ChatBox
            chat={chat}
            chatId={chatId}
            currentUser={currentUser}
            loading={pageLoading}
            key={index}
          />
        ))}

        {/* create a group dialog box where user can create a new group  */}

        <Dialog>
          <DialogTrigger>
            <div className="absolute bottom-32 lg:bottom-[105px] bg-green-100 cursor-pointer z-20 rounded-full w-14 h-14 flex justify-center items-center right-5">
              <MdOutlineGroupAdd className="text-green-500 font-bold text-2xl" />
            </div>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle className="text-start mb-1">
                Create Group{" "}
                {selectedContacts.length > 1 && (
                  <span className="text-[12px] text-softtext my-1">
                    {selectedContacts?.length} members
                  </span>
                )}
              </DialogTitle>
              <DialogDescription>
                {createGroup ? (
                  <div className="flex lg:flex-row flex-col gap-y-2 w-full py-1 gap-x-2 ">
                    <div className="input px-2 py-2 flex-1">
                      <input
                        type="text"
                        className="w-full text-sm bg-transparent outline-none"
                        placeholder="Group Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                      />
                    </div>
                    <div className="flex justify-center gap-x-1">
                      <button
                        onClick={() => setCreateGroup(false)}
                        className="bg-sky-100 px-3 max-lg:flex-1 max-lg:py-1 w-[70px] flex justify-center items-center rounded-full shadow-md text-sm text-sky-500"
                      >
                        <IoIosAddCircle className="text-2xl" />
                      </button>
                      <button
                        onClick={handleCreateGroup}
                        disabled={!name}
                        className="bg-green-100 max-lg:flex-1 max-lg:py-1 flex gap-x-1 items-center justify-center px-3 min-w-[70px] rounded-full shadow-md text-sm text-green-500"
                      >
                        Create
                        {loading && <ClipLoader size={15} color="#ffff" />}
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="pr-2">
                    <div className="input px-3 py-2">
                      <input
                        type="text"
                        className="w-full text-sm bg-transparent outline-none"
                        placeholder="Search Contacts"
                        value={searchContacts}
                        onChange={(e) => setSearchContacts(e.target.value)}
                      />
                      <FiSearch className="text-orange text-xl" />
                    </div>
                  </div>
                )}

                <div className=" mt-3   max-h-[53vh] min-h-[53vh]  lg:max-h-[50vh] lg:min-h-[50vh]  relative overflow-y-scroll max-md:scrollbar-hide">
                  {contacts.map((item, index) => (
                    <ContactBox
                      contact={item}
                      key={index}
                      group={true}
                      loading={pageLoading}
                      createGroup={createGroup}
                      selectedContacts={selectedContacts}
                      setSelectedContacts={setSelectedContacts}
                    />
                  ))}
                </div>

                {!createGroup && (
                  <button
                    disabled={selectedContacts.length < 1}
                    className="fixed bg-orange/20 font-semibold rounded-full shadow-md text-orange cursor-pointer z-20 px-4 py-2 flex justify-center items-center bottom-3 right-5 lg:right-8"
                    onClick={() => {
                      if (selectedContacts.length > 0) {
                        setCreateGroup(true);
                      }
                    }}
                  >
                    Next
                  </button>
                )}
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>

        {/* show all contacts and create a new chat with conatct */}

        <Dialog>
          <DialogTrigger>
            <div className="absolute bg-sky-100 cursor-pointer z-20 rounded-full w-14 h-14 flex justify-center items-center bottom-14 lg:bottom-10 right-5">
              <BiMessageSquareAdd className="text-sky-600 font-bold text-2xl" />
            </div>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Contacts</DialogTitle>
              <DialogDescription>
                <div className="pr-2">
                  <div className="input px-3 py-2">
                    <input
                      type="text"
                      className="w-full text-sm bg-transparent outline-none"
                      placeholder="Search Contacts"
                      value={searchContacts}
                      onChange={(e) => setSearchContacts(e.target.value)}
                    />
                    <FiSearch className="text-orange text-xl" />
                  </div>
                </div>

                <div className="mt-4 max-h-[50vh] min-h-[50vh] overflow-y-scroll max-md:scrollbar-hide">
                  {contacts.map((item, index) => (
                    <ContactBox
                      contact={item}
                      key={index}
                      loading={pageLoading}
                      currentUser={currentUser}
                    />
                  ))}
                </div>
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

export default LeftSideBar;
