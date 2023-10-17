import User from "../models/user.js";

export const registerRepo = async (payload) => {
  try {
    const newUser = new User(payload);
    const user = await newUser.save();
    return user;
  } catch (error) {
    console.log(error);
  }
};

export const loginRepo = async (payload) => {
  try {
    console.log(payload)
    const user = await User.findOne({username:payload.value.username});
    if (!user) {
      throw new Error("User not found");
    }
    return user;
  } catch (error) {
    console.log(error);
    throw error;
  }
};


