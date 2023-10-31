import User from "../../../models/user.js";
import createBoomError from '../../../middleware/boomError.js'

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
    console.log(payload);
    const user = await User.findOne({ username: payload.value.username });
    if (!user) {
      const unauthorizedError = createBoomError(401,'Unauthorized','You need to log in');
      return unauthorizedError;
    }
    return user;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
