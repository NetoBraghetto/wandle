import { Router } from "express";
import AuthController from "../controllers/AuthController";

const api = Router();

api.get('/', (req, res) => {
  res.status(200).send("Hello World!");
});
api.post('/auth/authenticate', AuthController.authenticate);
api.post('/auth/password-recovery', AuthController.passwordRecovery);
api.post('/auth/password-reset', AuthController.passwordReset);

export default api;
