"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.appointmentCancel = exports.appointmentSchedule = exports.getAppointmentById = exports.getAllAppointments = void 0;
const appointmentsService_1 = require("../services/appointmentsService");
const getAllAppointments = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const appointments = yield (0, appointmentsService_1.getAllAppointmentsService)();
        res.status(200).json(appointments);
    }
    catch (error) {
        res.status(404).json({ message: error.message });
    }
});
exports.getAllAppointments = getAllAppointments;
const getAppointmentById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const appointmentId = parseInt(req.params.id);
    try {
        const appointment = yield (0, appointmentsService_1.getAppointmentByIdService)(appointmentId);
        if (appointment) {
            res.status(200).json(appointment);
        }
        else {
            throw new Error("El turno solicitado no fue encontrado.");
        }
    }
    catch (error) {
        res.status(404).json({ message: error.message });
    }
});
exports.getAppointmentById = getAppointmentById;
const appointmentSchedule = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { date, time, userId } = req.body;
        if (!userId) {
            throw Error("Es necesario el ID del usuario para crear un turno.");
        }
        if (typeof date !== "string" || typeof time !== "string" || typeof userId !== "number") {
            throw Error("Los datos son incorrectos.");
        }
        const newAppointmentData = {
            date: date,
            time: time,
            userId: userId
        };
        const newAppointment = yield (0, appointmentsService_1.appointmentScheduleService)(newAppointmentData);
        res.status(201).json(newAppointment);
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
});
exports.appointmentSchedule = appointmentSchedule;
const appointmentCancel = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const appointmentId = parseInt(req.params.id);
    try {
        const cancelledAppointment = yield (0, appointmentsService_1.appointmentCancelService)(appointmentId);
        if (cancelledAppointment) {
            res.status(200).json(cancelledAppointment);
        }
        else {
            throw new Error("El turno que se intenta cancelar no fue encontrado.");
        }
    }
    catch (error) {
        res.status(404).json({ message: error.message });
    }
});
exports.appointmentCancel = appointmentCancel;
