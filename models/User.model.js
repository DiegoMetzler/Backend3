import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: String,
    password: String,
    role: String,
    pets: { type: Array, default: [] }
});

const UserModel = mongoose.model("User", userSchema);

export default UserModel;
