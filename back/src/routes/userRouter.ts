import { Router } from "express";
import { getAllUsers, getUserById, registerUser, loginUser } from "../controllers/userController";
import userValidate from "../middlewares/userValidateMIddleware";

const userRouter: Router = Router();

userRouter.get("/", getAllUsers);
userRouter.get("/:id", getUserById);
userRouter.post("/register", userValidate, registerUser);
userRouter.post("/login", loginUser);

export default userRouter;
