export const authMiddleware = () => {
  return (req, res, next) => {
    const authorization = req.headers.authorization;
    if (!authorization) {
      res.status(401).json({
        statusCode: 401,
        message: "Please connect in order to continue",
      });
    }

    const token = authorization.split(" ")[1];
    if (!token) {
      res.status(401).json({
        statusCode: 401,
        message: "Please connect in order to continue",
      });
    }

    ////
    next();
  };
};
