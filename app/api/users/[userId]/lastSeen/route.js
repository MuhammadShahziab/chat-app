import User from "@models/User";
import { ConnectToDB } from "@mongodb";

export const GET = async (req, { params }) => {
  try {
    await ConnectToDB();
    const { userId } = params;
    const userDetail = await User.findById(userId);
    return new Response(JSON.stringify(userDetail), { status: 200 });
  } catch (error) {
    console.log(error);
    return new Response("user detail failed");
  }
};
