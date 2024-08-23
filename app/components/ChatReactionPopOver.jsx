import React, { useState } from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import GetColor from "./GetColor";

const ChatReactionPopOver = ({ message, currentUser, right, chatId }) => {
  const [selectedEmoji, setSelectedEmoji] = useState(null);
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);

  // Filter reactions by selected emoji or show all reactions
  const filteredReactions = selectedEmoji
    ? message?.reaction?.filter((react) => react?.emoji === selectedEmoji)
    : message?.reaction;

  // Sort reactions: user reactions first, others later
  const sortedReactions = filteredReactions?.sort((a, b) => {
    if (a.senderId._id === currentUser.id) return -1; // Move current user's reaction to the top
    if (b.senderId._id === currentUser.id) return 1;
    return 0; // Otherwise, maintain original order
  });

  const removeReaction = async (id) => {
    try {
      const reaction = message?.reaction.find((react) => react._id === id);
      if (reaction?.senderId?._id === currentUser?.id) {
        setIsPopoverOpen(false);

        await fetch(`/api/messages/${message?._id}/reactions`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ _id: id, chatId }),
        });
      } else {
        console.log("You can only remove your own reactions.");
      }
    } catch (error) {
      console.error("Error removing reaction:", error);
    }
  };

  return (
    <Popover open={isPopoverOpen} onOpenChange={setIsPopoverOpen}>
      <PopoverTrigger>
        <p
          className={`absolute cursor-pointer shadow-lg px-2 rounded-full text-black bg-white flex justify-center items-center ${
            right ? "-bottom-4 right-0" : "-bottom-4 left-0"
          }`}
        >
          {message?.reaction.slice(0, 2).map((react, index) => (
            <span key={index}>{react?.emoji}</span>
          ))}
          {message?.reaction?.length}
        </p>
      </PopoverTrigger>
      <PopoverContent>
        <div className="border-b px-3 flex gap-x-5">
          <p
            onClick={() => setSelectedEmoji(null)}
            className={`text-softtext pb-1 cursor-pointer ${
              selectedEmoji === null ? "border-b-2 border-orange" : ""
            }`}
          >
            All {message?.reaction?.length}
          </p>

          {Array.from(
            new Set(message?.reaction.map((react) => react.emoji))
          ).map((emoji, index) => (
            <span
              key={index}
              className={`cursor-pointer ${
                selectedEmoji === emoji ? "border-b-2 border-orange" : ""
              }`}
              onClick={() => setSelectedEmoji(emoji)}
            >
              {emoji}
            </span>
          ))}
        </div>

        <div className="flex flex-col mt-4">
          {sortedReactions?.map((react, index) => (
            <div
              key={index}
              onClick={() => removeReaction(react?._id)}
              className={`flex items-center ${
                react?.senderId?.username === currentUser?.username
                  ? "hover:bg-gray-100 cursor-pointer"
                  : ""
              } px-3 py-2 justify-between`}
            >
              <div className="flex items-center gap-x-3">
                {react?.senderId.profileImage ? (
                  <img
                    src={react?.senderId.profileImage}
                    className="w-8 h-8 rounded-full object-cover"
                    alt="profileImage"
                  ></img>
                ) : (
                  <div
                    className={`w-9 h-9 text-white ${GetColor(
                      react?.senderId?.username
                    )} rounded-full flex justify-center items-center`}
                  >
                    {react?.senderId?.username?.charAt(0)}
                  </div>
                )}

                <div className="flex flex-col">
                  <p className="text-sm">
                    {react?.senderId?.username === currentUser?.username
                      ? "You"
                      : react?.senderId?.username}
                  </p>
                  {react?.senderId?.username === currentUser?.username && (
                    <p className="text-[12px] text-softtext">Click to remove</p>
                  )}
                </div>
              </div>
              <p>{react?.emoji}</p>
            </div>
          ))}
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default ChatReactionPopOver;
