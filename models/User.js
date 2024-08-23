import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true },
  password: {
    type: String,
    required: true,
  },
  profileImage: {
    type: String,
    default: "",
  },
  phone: {
    type: String,
    default: "",
  },
  bio: {
    type: String,
    default: "Hey there! i'm using this Chat App.",
  },
  lastSeen: { type: Date, default: Date.now },

  chats: { type: [{ type: mongoose.Schema.Types.ObjectId, ref: "Chat" }] },
});

const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;
