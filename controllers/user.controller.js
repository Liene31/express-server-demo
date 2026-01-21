import { userService } from "../services/mongo/user.service.js";

export const userController = {
  getAll: async (req, res) => {
    const query = req.query;
    try {
      const users = await userService.find(query);
      res.status(200).json({ users });
    } catch (err) {
      console.log(err);
      res.status(500).json({ statusCode: 500, message: "DB error" });
    }
  },
};
