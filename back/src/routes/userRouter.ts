import { Router } from "express";
import { getAllUsers, getUserById, registerUser, loginUser } from "../controllers/userController";

const userRouter: Router = Router();

userRouter.get("/", getAllUsers);
userRouter.get("/:id", getUserById);
userRouter.post("/register", registerUser);
userRouter.post("/login", loginUser);

export default userRouter;
