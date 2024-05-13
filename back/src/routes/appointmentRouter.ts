import { Router } from "express";
import { getAllAppointments, getAppointmentById, appointmentSchedule, appointmentCancel } from "../controllers/appointmentController";
// import auth from "../middlewares/autenticacion";

const appointmentsRouter: Router = Router();

appointmentsRouter.get("/", getAllAppointments);
appointmentsRouter.get("/:id", getAppointmentById);
appointmentsRouter.post("/schedule", appointmentSchedule);
appointmentsRouter.put("/cancel/", appointmentCancel);
appointmentsRouter.put("/cancel/:id", appointmentCancel);

export default appointmentsRouter;
