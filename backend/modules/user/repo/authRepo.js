import User from "../../../models/user.js";
import createBoomError from '../../../middleware/boomError.js'

export const registerRepo = async (payload) => {
  try {
      const newUser = new User(payload);
      const user = await newUser.save();
      console.log(user, "New User In Register Repo");
      return user;
  } catch (error) {
      console.error('Error in registerRepo:', error);
      throw error; 
  }
};

export const loginRepo = async (payload) => {
    const user = await User.findOne({ username: payload.value.username });
    console.log(user,"in loginRepo")
    if (!user) {
      const unauthorizedError = createBoomError(401,'Unauthorized','You need to log in');
      return unauthorizedError;
    }
    return user;
};
