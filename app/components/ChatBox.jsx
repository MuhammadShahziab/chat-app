import React from "react";
import GetColor from "./GetColor";
import moment from "moment";
import { useRouter, useSearchParams } from "next/navigation";
import { HiUserGroup } from "react-icons/hi";
import { Skeleton } from "@components/ui/skeleton";

const ChatBox = ({ chat, currentUser, chatId, loading }) => {
  const otherMember = chat?.members.filter(
    (item) => item._id !== currentUser.id
  );

  const lastMessage =
    chat?.messages.length > 0 && chat?.messages[chat?.messages?.length - 1];

  const seen = lastMessage?.seenBy?.find(
    (member) => member?._id === currentUser?.id
  );

  const router = useRouter();

  return (
    <div
      onClick={() => router.push(`/chats/${chat._id}`)}
      className={`${chatId === chat?._id ? "bg-orange" : ""} ${
        !loading && "hover:bg-orange"
      } flex items-center gap-x-3 cursor-pointer group py-1 px-2 rounded-lg`}
    >
      {loading ? (
        <Skeleton className="w-11 h-11 rounded-full" />
      ) : chat?.isGroup ? (
        chat?.groupPhoto ? (
          <img
            src={chat?.groupPhoto}
            className="w-11 h-11  rounded-full object-cover"
          ></img>
        ) : (
          <div
            className={`w-11 h-11 aspect-square flex justify-center items-center capitalize rounded-full ${GetColor(
              chat?.name
            )}  text-white`}
          >
            <HiUserGroup className="text-[22px] "></HiUserGroup>
          </div>
        )
      ) : otherMember[0]?.profileImage ? (
        <img
          src={otherMember[0]?.profileImage}
          className="w-11 h-11 aspect-square rounded-full object-cover"
        ></img>
      ) : (
        <div
          className={`w-11 h-11 aspect-square text-white flex justify-center capitalize items-center rounded-full ${GetColor(
            otherMember[0]?.username
          )} `}
        >
          {otherMember[0]?.username?.charAt()}
        </div>
      )}

      <div className="flex flex-col flex-1 min-w-0">
        {loading ? (
          <Skeleton className="w-24 h-3" />
        ) : chat?.isGroup ? (
          <p
            className={`text-sm truncate   ${
              chatId === chat?._id ? "text-white" : " group-hover:text-white"
            }`}
          >
            {chat?.name}
          </p>
        ) : (
          <p
            className={`text-sm truncate   ${
              chatId === chat?._id ? "text-white" : " group-hover:text-white"
            } `}
          >
            {otherMember[0]?.username}
          </p>
        )}

        {loading ? (
          <Skeleton className="w-32 h-3 mt-2" />
        ) : (
          <div>
            {!lastMessage && (
              <p
                className={`text-[12px]   ${
                  chatId === chat?._id
                    ? "text-white"
                    : " group-hover:text-white"
                }  font-medium`}
              >
                Started a chat
              </p>
            )}
            {lastMessage.photo ? (
              lastMessage?.sender._id === currentUser?.id ? (
                <p
                  className={`text-[12px]  ${
                    chatId === chat?._id
                      ? "text-white"
                      : " group-hover:text-white"
                  } ${seen ? "text-[#8B8B8B]" : "font-semibold"} `}
                >
                  {" "}
                  You sent a photo
                </p>
              ) : (
                <p
                  className={`text-[12px]  ${
                    chatId === chat?._id
                      ? "text-white"
                      : " group-hover:text-white"
                  } ${seen ? "text-[#8B8B8B]" : "font-semibold"} `}
                >
                  Received a photo
                </p>
              )
            ) : (
              <p
                className={`text-[12px] w-[120px]  truncate ${
                  chatId === chat?._id
                    ? "text-white"
                    : " group-hover:text-white"
                }  ${seen ? "text-[#8B8B8B]" : "font-semibold"} `}
              >
                {lastMessage?.text}
              </p>
            )}
          </div>
        )}
      </div>
      <div>
        {loading ? (
          <Skeleton className="w-11 h-3" />
        ) : (
          <p
            className={`text-[11px] group-hover:text-white    ${
              chatId === chat?._id ? "text-white" : " text-slate-400"
            }`}
          >
            {" "}
            {!lastMessage
              ? moment(chat?.createdAt).format("LT")
              : moment(chat?.lastMessageAt).format("LT")}{" "}
          </p>
        )}
      </div>
    </div>
  );
};

export default ChatBox;
