import { User } from "../../models/user.model.js";

export const roleAuthMiddleware = (roles) => {
  return async (req, res, next) => {
    const userId = req.user.id;

    try {
      const userInDb = await User.findById(userId);
      if (!userInDb) {
        res
          .status(404)
          .json({ statusCode: 404, message: "user not found in DB" });
      } else {
        if (roles.includes(userInDb.role)) {
          next();
        } else {
          res.status(403).json({
            statusCode: 403,
            message: "You don't have rights to access this resource",
          });
        }
      }
    } catch (err) {
      console.log(err);
      res.status(500).json({ statusCode: 500, message: "DB not working" });
    }
  };
};
