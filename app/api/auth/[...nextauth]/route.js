import CredentialsProvider from "next-auth/providers/credentials";
import NextAuth from "next-auth";
import { ConnectToDB } from "@mongodb";
import User from "@models/User";
import { compare } from "bcryptjs";

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      async authorize(credentials, req) {
        try {
          if (!credentials.email || !credentials.password) {
            throw new Error("Invalid Email and Password");
          }

          await ConnectToDB();

          const user = await User.findOne({ email: credentials?.email });
          if (!user) {
            throw new Error("Email is not exist");
          }

          const isMatchPassword = await compare(
            credentials?.password,
            user?.password
          );

          if (!isMatchPassword) {
            throw new Error("Password dost not match");
          }

          return user;
        } catch (error) {
          console.log("Error during authorization", error.message);
          throw new Error(error.message);
        }
      },
    }),
  ],

  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    async session({ session }) {
      const mongoUser = await User.findOne({ email: session?.user.email });

      session.user = {
        id: mongoUser._id.toString(),
        username: mongoUser?.username,
        email: mongoUser?.email,
        lastSeen: mongoUser?.lastSeen,
        profileImage: mongoUser?.profileImage,
        phone: mongoUser?.phone,
        bio: mongoUser?.bio,
      };

      return session;
    },
  },
});

export { handler as GET, handler as POST };
