import { AppDataSource } from "../config/data-source";
import { Credential } from "../entities/Credential";

export const CredentialsRepository = AppDataSource.getRepository(Credential);
