import CredentialsDto from "../dto/CredentialDto";
import { Credentials } from "../entities/Credential";
import { CredentialsRepository } from "../Repositories/CredentialRepository";
// import { UserRepository } from "../Repositories/UserRepository";


export const createCredentialsService= async (createCredentialDto: CredentialsDto):Promise<Credentials>=>{
  const newCredential= CredentialsRepository.create(createCredentialDto)
  await CredentialsRepository.save(newCredential)
  return newCredential
}

export const validateCredentials = async ( credentialDto: CredentialsDto ):Promise<number> => {
  const findCredential =await CredentialsRepository.findOneBy({ username: credentialDto.username });
  if (!findCredential) {throw new Error('El usuario no existe.')};
  if(findCredential.password !== credentialDto.password) throw new Error('Contraseña incorrecta.');
  return (findCredential.id);
};