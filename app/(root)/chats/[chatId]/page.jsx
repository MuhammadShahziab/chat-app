"use client";
import Box from "@app/components/Box";
import ChatDetail from "@app/components/ChatDetail";
import LeftSideBar from "@app/components/LeftSideBar";
import RightSideBar from "@app/components/RightSideBar";
import { UserUpdateLastSeen } from "@app/hooks/UserUpdateLastSeen";
import { useSession } from "next-auth/react";
import { useParams } from "next/navigation";
import React, { useEffect } from "react";

const ChatPage = () => {
  const { chatId } = useParams();

  const { data: session } = useSession();
  const currentUser = session?.user;
  UserUpdateLastSeen(currentUser?.id);
  const seenLastMessages = async () => {
    try {
      await fetch(`/api/chats/${chatId}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ currentUserId: currentUser?.id }),
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (currentUser && chatId) {
      seenLastMessages();
    }
  }, [currentUser, chatId]);

  return (
    <>
      <Box>
        <div className="grid grid-cols-12 h-full  lg:min-h-[88vh] overflow-hidden lg:max-h-[88vh]">
          <div className=" col-span-5  lg:col-span-3  max-md:hidden ">
            <LeftSideBar chatId={chatId} />
          </div>
          <div className="col-span-12 md:col-span-7 lg:col-span-6    w-full">
            <ChatDetail chatId={chatId} currentUser={currentUser} />
          </div>
          <div className="col-span-3 max-lg:hidden ">
            <RightSideBar chatId={chatId} />
          </div>
        </div>
      </Box>
    </>
  );
};

export default ChatPage;
