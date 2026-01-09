export const isValidValue = () => {
  return (req, res, next) => {
    const namesNoTAllowed = ["trump", "elon", "musk"];

    const checkValues = Object.values(req.body);

    // console.log(checkValues);

    checkValues.forEach((value) => {
      if (typeof value === "string") {
        console.log(value === "Anna");
      }
    });

    const match = checkValues.some((test) => {
      return namesNoTAllowed.includes(test);
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
