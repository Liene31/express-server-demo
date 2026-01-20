import { User } from "../../models/user.model.js";

export const userAuthMiddleware = () => {
  return async (req, res, next) => {
    const userRouterId = req.params.id;
    const userId = req.user.id;

    try {
      const tokenUser = await User.findById(userId);
      if (!tokenUser) {
        res
          .statusCode(404)
          .json({ statusCode: 404, message: "User doesn't exist" });
      } else {
        if (tokenUser.role === "Admin") {
          next();
        } else if (userRouterId === userId) {
          next();
        } else {
          res.status(403).json({
            statusCode: 403,
            message: "You don't have rights to access this info",
          });
        }
      }
    } catch (err) {
      res.status(500).json({ statusCode: 500, message: "Error in DB" });
    }
  };
};
