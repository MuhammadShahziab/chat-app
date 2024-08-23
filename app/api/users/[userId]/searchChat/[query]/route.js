import Chat from "@models/Chat";
import Message from "@models/Message";
import User from "@models/User";
import { ConnectToDB } from "@mongodb";

export const GET = async (req, { params }) => {
  try {
    await ConnectToDB();
    const { userId, query } = params;

    if (!query) {
      return new Response("No query provided", { status: 400 });
    }

    let searchChats;

    const userQuery = await User.findOne({
      username: { $regex: new RegExp(`^${query}$`, "i") },
    });

    if (userQuery) {
      searchChats = await Chat.find({
        members: userQuery._id,
      })
        .populate({
          path: "members",
          model: User,
        })
        .populate({
          path: "messages",
          model: Message,
          populate: {
            path: "sender seenBy",
            model: User,
          },
        })
        .exec();
    } else {
      searchChats = await Chat.find({
        name: { $regex: query, $options: "i" },
        isGroup: true,
      })
        .populate({
          path: "members",
          model: User,
        })
        .populate({
          path: "messages",
          model: Message,
          populate: {
            path: "sender seenBy",
            model: User,
          },
        })
        .exec();
    }

    return new Response(JSON.stringify(searchChats), { status: 200 });
  } catch (error) {
    console.log(error);
    return new Response("Failed to get search chats", { status: 500 });
  }
};
