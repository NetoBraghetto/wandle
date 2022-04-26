import { Request, Response } from "express";
import { Controller } from "./Controller";

export class AuthController extends Controller {
  public authenticate(req: Request, res: Response) {
    return res.end('authenticate');
  }

  public passwordRecovery(req: Request, res: Response) {
    return res.end('passwordRecovery');
  }

  public passwordReset(req: Request, res: Response) {
    return res.end('passwordReset');
  }
}

export default new AuthController();
