import User from "../../../models/user.js";
import createBoomError from '../../../middleware/boomError.js'

export const registerRepo = async (payload) => {
    const newUser = new User(payload);
    const user = await newUser.save();
    return user;
};

export const loginRepo = async (payload) => {
    console.log(payload);
    const user = await User.findOne({ username: payload.value.username });
    if (!user) {
      const unauthorizedError = createBoomError(401,'Unauthorized','You need to log in');
      return unauthorizedError;
    }
    return user;
};
