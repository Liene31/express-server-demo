import { jwtUtils } from "../../controllers/utils/jwt.utils.js";

export const authMiddleware = () => {
  return async (req, res, next) => {
    const authorization = req.headers.authorization;
    if (!authorization) {
      res.status(401).json({
        statusCode: 401,
        message: "Please connect in order to continue",
      });
    } else {
      const token = authorization.split(" ")[1];
      console.log(token);
      if (!token) {
        res.status(401).json({
          statusCode: 401,
          message: "Please connect in order to continue",
        });
      }

      try {
        const payload = await jwtUtils.decode(token);
        req.user = payload;
        next();
      } catch (err) {
        res.status(401).json({
          statusCode: 401,
          message: "Please connect in order to continue ",
        });
      }
    }
  };
};
