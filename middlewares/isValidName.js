export const isValidName = () => {
  return (req, res, next) => {
    const body = req.body.name.toLowerCase();
    const namesNoTAllowed = ["trump", "elon", "musk"];
    const match = namesNoTAllowed.some((word) => {
      return body.includes(word);
    });

    if (match) {
      res.status(400).json({
        statusCode: 400,
        message: `names “Trump”, “Elon” and “Musk” are not allowed`,
      });
    } else {
      next();
    }
  };
};
