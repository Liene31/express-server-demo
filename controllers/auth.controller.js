import { authService } from "../services/mongo/auth.service.js";

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
    res.sendStatus(501);
  },
};
