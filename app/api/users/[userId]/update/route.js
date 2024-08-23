import User from "@models/User";
import { ConnectToDB } from "@mongodb";

export const POST = async (req, { params }) => {
  try {
    await ConnectToDB();
    const body = await req.json();
    const { userId } = params;
    const { username, profileImage, phone, bio, lastSeen } = body;
    let updateUser;
    if (!lastSeen) {
      updateUser = await User.findByIdAndUpdate(
        userId,
        {
          username,
          bio,
          phone,
          profileImage,
        },
        { new: true }
      );
    } else {
      updateUser = await User.findByIdAndUpdate(
        userId,
        {
          lastSeen,
        },
        { new: true }
      );
    }

    return new Response(JSON.stringify(updateUser), { status: 200 });
  } catch (error) {
    console.log(error);
    return new Response("Failed to update user", { status: 500 });
  }
};
