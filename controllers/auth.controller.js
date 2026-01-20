import { authService } from "../services/mongo/auth.service.js";
import { jwtUtils } from "./utils/jwt.utils.js";

export const authController = {
  register: async (req, res) => {
    try {
      const userToAdd = req.body;

      if (await authService.emailAlreadyExists(userToAdd.email)) {
        res.status(409).json({ message: "Email already exists" });
      } else {
        const userCreated = await authService.create(userToAdd);

        res.location(`/api/user/${userCreated.id}`);
        res.status(201).json({
          id: userCreated._id,
          firstName: userCreated.firstName,
          lastName: userCreated.lastName,
        });
      }
    } catch (err) {
      res.sendStatus(500);
    }
  },

  login: async (req, res) => {
    try {
      const credentials = req.body;
      const userFound = await authService.findByCredentials(credentials);
      if (!userFound) {
        res
          .status(401)
          .json({ statusCode: 401, message: "Connection info is wrong" });
      } else {
        const token = await jwtUtils.generate(userFound);
        res.status(200).json({
          id: userFound._id,
          firstName: userFound.firstName,
          lastName: userFound.lastName,
          token: token,
        });
      }
    } catch (err) {
      console.log(err);
      res.sendStatus(500);
    }
  },
};
