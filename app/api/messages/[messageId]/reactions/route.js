import { pusherServer } from "@lib/pusher";
import Message from "@models/Message";
import User from "@models/User";

export const POST = async (req, { params }) => {
  try {
    // Parse the request body to get the reaction ID
    const { _id: reactionId, chatId } = await req.json();
    const { messageId } = params;

    // Use $pull to remove the specific reaction from the message's reaction array
    const updatedMessage = await Message.findByIdAndUpdate(
      messageId,
      {
        $pull: { reaction: { _id: reactionId } }, // Remove the reaction with the specific reactionId
      },
      { new: true } // Return the updated message document
    ).populate([
      {
        path: "sender seenBy",
        model: User,
      },
      {
        path: "reaction.senderId",
        model: User,
      },
    ]);

    if (!updatedMessage) {
      return new Response("Message not found", { status: 404 });
    }

    await pusherServer.trigger(chatId, "remove-reaction", {
      messageId,
      reactionId,
      message: updatedMessage,
    });

    return new Response(JSON.stringify(updatedMessage), { status: 200 });
  } catch (error) {
    console.error("Failed to delete reaction:", error);
    return new Response("Failed to delete reaction", { status: 500 });
  }
};
