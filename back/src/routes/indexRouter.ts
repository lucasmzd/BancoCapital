import { Router } from "express";
import appointmentsRouter from "./appointmentRouter";
import userRouter from "./userRouter";
// import auth from "../middlewares/autenticacion";

const router: Router = Router();

router.use("/users", userRouter);
router.use("/appointments", appointmentsRouter);

export default router;
