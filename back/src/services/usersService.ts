import { AppDataSource } from "../config/data-source";
import UserDto from "../dto/UserDto";
import { User } from "../entities/User";
import { CredentialsRepository } from "../Repositories/CredentialRepository";
import { UserRepository } from "../Repositories/UserRepository";
import { createCredentialsService } from "./credentialsService";
// import IUser from "../interfaces/IUser";


export const getAllUsersService = async (): Promise<User[]> => {
  const users : User[] = await UserRepository.find({relations:{appointments:true}}); 

  return users;
};

export const getUserByIdService= async (id:number): Promise< User| Error>=>{
  const founduser: User|null= await UserRepository.findOne({ where: { id }, relations: ['appointments'] });
  if(!founduser) throw Error("El usuario no fue encontrado.")
  return founduser;
}

export const registerUserService = async(
  createUserDto: UserDto
): Promise<User|Error> =>{
  const QueryRunner= AppDataSource.createQueryRunner();
  await QueryRunner.connect();
  try{
      await QueryRunner.startTransaction();
  const validateMail= await UserRepository.findOneBy({email: createUserDto.email})
  if(validateMail) throw Error("ya existe un usuario con ese E-mail")

  const validateNDni=await UserRepository.findOneBy({nDni: createUserDto.nDni})
  if(validateNDni) throw Error("ya existe un usuario con ese DNI")

  const validateUsername=await CredentialsRepository.findOneBy({username: createUserDto.username})
  if(validateUsername) throw Error("ya existe un usuario con ese usuario")

  const newCredential= await createCredentialsService({
      username: createUserDto.username,
      password: createUserDto.password
  });
  const newUser= await UserRepository.create({ ...createUserDto, credential: newCredential.id })
  await QueryRunner.manager.save(newUser)
  await QueryRunner.commitTransaction();
  return newUser
}catch(error:any){
  await QueryRunner.rollbackTransaction();
  throw Error(error.message)
}finally{
  await QueryRunner.release();
}
}