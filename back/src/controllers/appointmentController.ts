import { Request, Response } from "express";
import { AppointmentDto } from "../dto/AppointmentDto";
import { Appointment } from "../entities/Appointment";
import { getAllAppointmentsService, getAppointmentByIdService, appointmentScheduleService, appointmentCancelService } from "../services/appointmentsService";

export const getAllAppointments = async (req:Request, res: Response):Promise<Appointment[]|void>=>{
  try{
      const appointments= await getAllAppointmentsService();
      res.status(200).json(appointments);
  }catch (error:any) {res.status(404).json({message:error.message}) }
}

export const getAppointmentById = async (req: Request,res: Response):Promise<Appointment[]|void> => {
  const appointmentId: number = parseInt(req.params.id);
  try {
    const appointment = await getAppointmentByIdService(appointmentId);
    if (appointment) {
      res.status(200).json(appointment);
    } else {
      throw new Error("El turno solicitado no fue encontrado.");
    }
  } catch (error:any) {
    res.status(404).json({ message: error.message });
  }
};

export const appointmentSchedule = async(req: Request, res: Response): Promise<Appointment|void> => {
  try {
      const { date, time, description, userId } = req.body;
      if (!userId) {
          throw Error("Es necesario el ID del usuario para crear un turno.");
      }
      if ( typeof date !== "string" || typeof time !== "string" || typeof description !== "string" || typeof userId !== "number") {
          throw Error("Los datos son incorrectos.");
      }
      const newAppointmentData: AppointmentDto = {
          date: date,
          time: time,
          description: description,
          userId: userId
      };
      const newAppointment = await appointmentScheduleService (newAppointmentData);
      res.status(201).json(newAppointment);
  } catch (error:any) {
      res.status(400).json({ message: error.message });
  }
};

export const appointmentCancel = async (req: Request, res: Response):Promise<void|Error> => {
  const appointmentId: number = parseInt(req.params.id);
  try {
    const cancelledAppointment = await appointmentCancelService(appointmentId);
    if (cancelledAppointment) {
      res.status(200).json(cancelledAppointment);
    } else {
      throw new Error("El turno que se intenta cancelar no fue encontrado.");
    }
  } catch (error:any) {
    res.status(404).json({ message: error.message });
  }
};
