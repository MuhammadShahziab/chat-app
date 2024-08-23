import { pusherServer } from "@lib/pusher";
import Chat from "@models/Chat";
import { ConnectToDB } from "@mongodb";

export const POST = async (req, { params }) => {
  try {
    const body = await req.json();
    const { name, groupPhoto } = body;
    const { chatId } = params;

    await ConnectToDB();

    const updateGroupChat = await Chat.findByIdAndUpdate(
      chatId,
      { name, groupPhoto },
      { new: true }
    );
    updateGroupChat?.members.map(async (member) => {
      await pusherServer.trigger(
        member?._id.toString(),
        "update-group-profile",
        updateGroupChat
      );
    });
    return new Response(JSON.stringify(updateGroupChat), { status: 200 });
  } catch (error) {
    console.error(error);
    return new Response("Failed to update group", { status: 500 });
  }
};
