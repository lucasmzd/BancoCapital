import { AppointmentDto } from "../dto/AppointmentDto";
import { Appointment } from "../entities/Appointment";
import { AppointmentRepository } from "../Repositories/AppointmentRepository";
import { UserRepository } from "../Repositories/UserRepository";

export const getAllAppointmentsService = async ():Promise<Appointment[]> => {
  const appointments = await AppointmentRepository.find();
  if (appointments.length === 0) {
    throw new Error("No hay turnos disponibles.");
  }
  return appointments;
};

export const getAppointmentByIdService = async (id: number) => {
  const foundAppointment = AppointmentRepository.findBy({ id: id });
  if ((await foundAppointment).length === 0) {
    throw new Error("El turno solicitado no fue encontrado.");
  }
  return foundAppointment;
};

export const appointmentScheduleService = async (createTurn: AppointmentDto):Promise<Appointment|Error> => {
  const userExist = await UserRepository.findOneBy({ id: createTurn.userId });
  if (!userExist) {
    throw Error("El usuario no fue encontrado.");
  }
  const newDate = await AppointmentRepository.create({
    ...createTurn,
    user: userExist.id,
    status: "active",
  });

  await AppointmentRepository.save(newDate);
  return newDate;
};

export const appointmentCancelService = async (id: number):Promise<Appointment|null> => {
  const appointment = await AppointmentRepository.findOneBy({ id });
  if (appointment===null) {
    throw new Error("El turno solicitado para cancelar no fue encontrado.");
  }
  appointment.status = "cancelled";
    await AppointmentRepository.save(appointment);
  return appointment;
};