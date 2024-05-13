import { AppDataSource } from "../config/data-source";
import { Credentials } from "../entities/Credential";

export const CredentialsRepository= AppDataSource.getRepository(Credentials);
