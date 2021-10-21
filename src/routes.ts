import { Router } from "express";
import { AuthenticateUserController } from "./constrollers/AuthenticateUserController";
import { CreateMessageController } from "./constrollers/CreateMessageController";
import { GetLast3MessagesController } from "./constrollers/GetLast3MessagesController";
import { ProfileUserController } from "./constrollers/ProfileUserController";
import { ensureAuthenticated } from "./middleware/ensureAuthenticated";

const router = Router();

router.post("/authenticate", new AuthenticateUserController().handle);

router.post("/messages", ensureAuthenticated, new CreateMessageController().handle)

router.get("/messages/last3", new GetLast3MessagesController().handle);

router.get("/profile", ensureAuthenticated, new ProfileUserController().handle)

export {router}