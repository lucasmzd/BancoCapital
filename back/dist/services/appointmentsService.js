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
exports.appointmentCancelService = exports.appointmentScheduleService = exports.getAppointmentByIdService = exports.getAllAppointmentsService = void 0;
const AppointmentRepository_1 = require("../Repositories/AppointmentRepository");
const UserRepository_1 = require("../Repositories/UserRepository");
const getAllAppointmentsService = () => __awaiter(void 0, void 0, void 0, function* () {
    const appointments = yield AppointmentRepository_1.AppointmentRepository.find();
    if (appointments.length === 0) {
        throw new Error("No hay turnos disponibles.");
    }
    return appointments;
});
exports.getAllAppointmentsService = getAllAppointmentsService;
const getAppointmentByIdService = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const foundAppointment = AppointmentRepository_1.AppointmentRepository.findBy({ id: id });
    if ((yield foundAppointment).length === 0) {
        throw new Error("El turno solicitado no fue encontrado.");
    }
    return foundAppointment;
});
exports.getAppointmentByIdService = getAppointmentByIdService;
const appointmentScheduleService = (createTurn) => __awaiter(void 0, void 0, void 0, function* () {
    const userExist = yield UserRepository_1.UserRepository.findOneBy({ id: createTurn.userId });
    if (!userExist) {
        throw Error("El usuario no fue encontrado.");
    }
    const newDate = yield AppointmentRepository_1.AppointmentRepository.create(Object.assign(Object.assign({}, createTurn), { user: userExist.id, status: "active" }));
    yield AppointmentRepository_1.AppointmentRepository.save(newDate);
    return newDate;
});
exports.appointmentScheduleService = appointmentScheduleService;
const appointmentCancelService = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const appointment = yield AppointmentRepository_1.AppointmentRepository.findOneBy({ id });
    if (appointment === null) {
        throw new Error("El turno solicitado para cancelar no fue encontrado.");
    }
    appointment.status = "cancelled";
    yield AppointmentRepository_1.AppointmentRepository.save(appointment);
    return appointment;
});
exports.appointmentCancelService = appointmentCancelService;
