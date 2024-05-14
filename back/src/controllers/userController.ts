import { Request, Response } from "express";
import CredentialsDto from "../dto/CredentialDto";
import { UserRepository } from "../Repositories/UserRepository";
import { getAllUsersService, getUserByIdService, registerUserService } from "../services/usersService";
import { validateCredentials } from "../services/credentialsService";
// import IUser from "../interfaces/IUser";

export const getAllUsers = async (req: Request, res: Response) => {
  const users = await getAllUsersService();
  res.status(200).json(users);
};

export const getUserById= async(req:Request, res: Response)=>{
  const {id}= req.params;
  try{
      const founduser=await getUserByIdService(Number(id))
      res.status(200).json(founduser)
  }
  catch(error:any){
      res.status(404).json({message:error.message})
  }
}

export const registerUser = async (req: Request, res: Response) => {
  try {
    const { name, email, birthdate, nDni, username, password } = req.body;
    
    if (
      typeof name === 'string' &&
      typeof email === 'string' &&
      typeof birthdate === 'string' &&
      typeof nDni === 'number' &&
      typeof username === 'string' &&
      typeof password === 'string'
    ) {
      const newUser = await registerUserService({ name, email, birthdate, nDni, username, password });
      return res.status(201).json(newUser);
    } else {
      throw new Error('Datos no válidos, asegúrese de completarlos correctamente.');
    }
  } catch (error) {
    return res.status(400).json({ message: `${error}` });
  }
};

export const loginUser = async (req: Request, res: Response) => {
  try {
      const login: CredentialsDto = req.body;
      const checkIn = await validateCredentials(login);

      const findUser = await UserRepository.findOneBy({ id: checkIn});
      if (!findUser) throw new Error ('Usuario no encontrado.');
      res.send({
          login: true,
          user: {
              id: findUser.id,
              name: findUser.name,
              email: findUser.email,
              birthdate: findUser.birthdate,
              nDNI: findUser.nDni
          }
      })
  } catch (error: any) {
      res.status(400).json({ message: error.message });
  }
}



