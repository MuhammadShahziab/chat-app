import { pusherServer } from "@lib/pusher";
import Message from "@models/Message";
import User from "@models/User";
import { ConnectToDB } from "@mongodb";

export const POST = async (req, { params }) => {
  try {
    const body = await req.json();
    const { emoji, senderId, chatId } = body;
    const { messageId } = params;

    await ConnectToDB();

    let message = await Message.findById(messageId);

    // Check if the message exists
    if (!message) {
      return new Response("Message not found", { status: 404 });
    }

    // Find the existing reaction by the senderId
    const existingReaction = message.reaction.find(
      (r) => r.senderId.toString() === senderId
    );

    if (existingReaction) {
      // If a reaction from this sender already exists, update the emoji
      existingReaction.emoji = emoji;
    } else {
      // If no reaction exists from this sender, add a new one
      message.reaction.push({ senderId, emoji });
    }

    // Save the updated message
    await message.save();

    // Re-fetch and populate the message to ensure the reaction is populated
    message = await Message.findById(messageId).populate([
      {
        path: "sender seenBy",
        model: User,
      },
      {
        path: "reaction.senderId",
        model: User,
      },
    ]);

    // Trigger the Pusher event with the updated message document
    await pusherServer.trigger(chatId, "add-reaction", {
      id: messageId,
      message,
    });

    return new Response(JSON.stringify(message), { status: 200 });
  } catch (error) {
    console.error("Error adding reaction:", error);
    return new Response("Failed to add reaction", { status: 500 });
  }
};
