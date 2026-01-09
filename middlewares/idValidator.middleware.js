export const idValidatorMiddleware = () => {
  return (req, res, next) => {
    const id = parseInt(req.params.id);

    if (isNaN(id)) {
      res.status(400).json({ statusCode: 400, message: "ID must be a number" });
    } else {
      next();
    }
  };
};
