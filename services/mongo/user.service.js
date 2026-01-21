import { User } from "../../models/user.model.js";

export const userService = {
  find: async (query) => {
    try {
      console.log(query);
      const { firstName } = query;

      const categories = await User.find({
        firstName: { $regex: firstName },
      })
        .select("-email")
        .select("-password")
        .select("-role");
      return categories;
    } catch (err) {
      console.log(err);
      throw new Error(err);
    }
  },
};
