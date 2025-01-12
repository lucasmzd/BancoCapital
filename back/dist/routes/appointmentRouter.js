"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const appointmentController_1 = require("../controllers/appointmentController");
// import auth from "../middlewares/autenticacion";
const appointmentsRouter = (0, express_1.Router)();
appointmentsRouter.get("/", appointmentController_1.getAllAppointments);
appointmentsRouter.get("/:id", appointmentController_1.getAppointmentById);
appointmentsRouter.post("/schedule", appointmentController_1.appointmentSchedule);
appointmentsRouter.put("/cancel/", appointmentController_1.appointmentCancel);
appointmentsRouter.put("/cancel/:id", appointmentController_1.appointmentCancel);
exports.default = appointmentsRouter;
