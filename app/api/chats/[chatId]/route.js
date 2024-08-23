import Chat from "@models/Chat";
import User from "@models/User";
import Message from "@models/Message";

import { ConnectToDB } from "@mongodb";

export const GET = async (req, { params }) => {
  try {
    await ConnectToDB();
    const { chatId } = params;

    const chat = await Chat.findById(chatId)
      .populate({
        path: "members",
        model: User,
      })
      .populate({
        path: "messages",
        model: Message,
        populate: [
          {
            path: "sender",
            model: User,
          },
          {
            path: "seenBy",
            model: User,
          },
          {
            path: "reaction.senderId", // Correctly specify the nested path
            model: User,
          },
        ],
      });

    return new Response(JSON.stringify(chat), { status: 200 });
  } catch (error) {
    console.log(error);
    return new Response("Failed to get chat details");
  }
};

export const POST = async (req, { params }) => {
  try {
    const body = await req.json();
    const { currentUserId } = body;
    const { chatId } = params;
    await ConnectToDB();
    await Message.updateMany(
      { chat: chatId },
      {
        $addToSet: { seenBy: currentUserId },
      },
      { new: true }
    )
      .populate({
        path: "seenBy sender",
        model: User,
      })
      .exec();

    return new Response("Seen all message bu current user", { status: 200 });
  } catch (error) {
    console.log(error);
    return new Response("Failed to update seen messages", { status: 500 });
  }
};
