import { ConnectToDB } from "@mongodb";
import Message from "@models/Message";
import Chat from "@models/Chat";
import User from "@models/User";
import { pusherServer } from "@lib/pusher";
export const POST = async (req) => {
  try {
    await ConnectToDB();

    const body = await req.json();
    const { photo, text, currentUserId, chatId } = body;
    const currentUser = await User.findById(currentUserId);
    const newMessage = await Message.create({
      sender: currentUser,
      text,
      photo,
      chat: chatId,
      seenBy: [currentUserId],
    });

    const updateChat = await Chat.findByIdAndUpdate(
      chatId,
      {
        $push: { messages: newMessage._id },
        $set: { lastMessageAt: newMessage.createdAt },
      },
      { new: true }
    )
      .populate({
        path: "messages",
        model: Message,
        populate: { path: "sender seenBy", model: User },
      })
      .populate({ path: "members", model: User })
      .exec();

    const lastMessage = updateChat.messages[updateChat.messages.length - 1];
    updateChat.members.forEach(async (member) => {
      try {
        await pusherServer.trigger(member._id.toString(), "update-chat", {
          id: chatId,
          message: [lastMessage],
        });
      } catch (error) {
        console.error(`Failed to trigger update-chat event`);
      }
    });

    await pusherServer.trigger(chatId, "new-message", {
      id: chatId,
      newMessage,
    });

    return new Response(JSON.stringify(newMessage), { status: 200 });
  } catch (error) {
    console.log(error);
    return new Response("Failed to create new message", { status: 500 });
  }
};
