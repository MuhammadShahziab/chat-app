import React, { useState } from "react";
import moment from "moment";
import { BsEmojiAstonished } from "react-icons/bs";
import ChatReactionPopOver from "./ChatReactionPopOver";
import GetColor from "./GetColor";

const reactionsList = ["👍", "❤️", "😂", "😮", "😢", "😡"];

const MessageBox = ({
  currentUser,
  message,
  chatPhotos,
  setImageIndex,
  chatId,
}) => {
  const [showReactionPicker, setShowReactionPicker] = useState(null);

  const handleImageClick = (photoUrl) => {
    const index = chatPhotos?.findIndex((photo) => photo === photoUrl);

    if (index !== -1) {
      setImageIndex(index);
    } else {
      console.error("Image URL not found in chatPhotos array.");
    }
  };

  const addReaction = async (reaction, id) => {
    try {
      setShowReactionPicker(null);
      await fetch(`/api/messages/${id}/update`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          senderId: currentUser?.id,
          emoji: reaction,
          chatId,
        }),
      });
    } catch (error) {
      console.log(error);
    }
  };

  const toggleReactionPicker = (id) => {
    setShowReactionPicker(showReactionPicker === id ? null : id);
  };

  return message?.sender?._id !== currentUser?.id ? (
    <div className="flex items-end gap-x-1  mt-2  justify-start group  ">
      <div className="">
        {message?.sender?.profileImage ? (
          <img
            className="w-7 h-7  rounded-full object-cover"
            src={message?.sender?.profileImage}
          ></img>
        ) : (
          <div
            className={`w-7 h-7  flex justify-center capitalize  items-center text-white rounded-full ${GetColor(
              message?.sender?.username
            )}`}
          >
            {message?.sender?.username?.charAt()}
          </div>
        )}
        <p className="text-[9px]  whitespace-nowrap mt-1 text-softtext">
          {moment(message?.createdAt).format("LT")}
        </p>
      </div>
      <div className="flex w-full gap-x-2 items-center relative  ">
        {message.text ? (
          <p className="bg-gray-100 max-w-[80%] mb-7  text-black rounded-tr-md mt-5 text-sm rounded-tl-md rounded-bl-md px-4 py-2 relative ">
            {message?.text}
            {message?.reaction?.length > 0 && (
              <ChatReactionPopOver
                message={message}
                currentUser={currentUser}
                chatId={chatId}
              ></ChatReactionPopOver>
            )}
          </p>
        ) : (
          <div className="bg-white relative p-1 rounded-lg w-48 mb-2 cursor-pointer h-[200px] md:min-w-64 md:max-h-[250px]">
            <img
              src={message?.photo}
              onClick={() => handleImageClick(message?.photo)}
              className="w-full h-full rounded-lg object-cover"
            ></img>{" "}
            {message?.reaction?.length > 0 && (
              <ChatReactionPopOver
                message={message}
                currentUser={currentUser}
                chatId={chatId}
              ></ChatReactionPopOver>
            )}
          </div>
        )}
        <div className="relative flex-1 ">
          <BsEmojiAstonished
            onClick={() => toggleReactionPicker(message?._id)}
            className=" text-softtext cursor-pointer   "
          ></BsEmojiAstonished>
          {showReactionPicker === message?._id && (
            <div className="mb-2 p-2 py-3 absolute -left-24 bottom-full bg-white z-50 rounded-full shadow-lg reaction-picker-animation">
              <div className="flex gap-2">
                {reactionsList.map((emoji, index) => (
                  <span
                    key={index}
                    className="cursor-pointer text-lg animate-bounce hover:animate-none"
                    onClick={() => addReaction(emoji, message?._id)}
                  >
                    {emoji}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  ) : (
    <div className="flex items-end gap-x-1 mt-2   flex-row-reverse justify-start relative">
      <div>
        {message?.sender?.profileImage ? (
          <img
            className="w-7 h-7  rounded-full object-cover"
            src={message?.sender?.profileImage}
          ></img>
        ) : (
          <div
            className={`w-7 h-7  text-white capitalize flex justify-center items-center rounded-full ${GetColor(
              message?.sender?.username
            )}`}
          >
            {message?.sender?.username?.charAt()}
          </div>
        )}
        <p className="text-[9px] mt-1  whitespace-nowrap flex items-center gap-x-1 text-softtext">
          {moment(message?.createdAt).format("LT")}
        </p>
      </div>
      <div className="flex w-full gap-x-2 justify-end items-center relative">
        <div className="relative  ">
          <BsEmojiAstonished
            onClick={() => toggleReactionPicker(message?._id)}
            className=" text-softtext cursor-pointer   "
          ></BsEmojiAstonished>
          {showReactionPicker === message?._id && (
            <div className="mb-2 p-2 py-3 absolute -left-24 bottom-full bg-white z-50 rounded-full shadow-lg reaction-picker-animation">
              <div className="flex gap-2">
                {reactionsList.map((emoji, index) => (
                  <span
                    key={index}
                    className="cursor-pointer text-lg animate-bounce hover:animate-none"
                    onClick={() => addReaction(emoji, message?._id)}
                  >
                    {emoji}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>

        {message.text ? (
          <p className="bg-[#18D39E] max-w-[80%] mb-7  text-white rounded-tr-md mt-5 text-sm rounded-tl-md rounded-bl-md px-4 py-2 relative ">
            {message?.text}
            {message?.reaction?.length > 0 && (
              <ChatReactionPopOver
                message={message}
                currentUser={currentUser}
                right={true}
                chatId={chatId}
              ></ChatReactionPopOver>
            )}
          </p>
        ) : (
          <div className="bg-white relative p-1 rounded-lg w-48 mb-2 cursor-pointer h-[200px] md:min-w-64 md:max-h-[250px]">
            <img
              src={message?.photo}
              onClick={() => handleImageClick(message?.photo)}
              className="w-full h-full rounded-lg object-cover"
            ></img>{" "}
            {message?.reaction?.length > 0 && (
              <ChatReactionPopOver
                message={message}
                currentUser={currentUser}
                right={true}
                chatId={chatId}
              ></ChatReactionPopOver>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default MessageBox;
