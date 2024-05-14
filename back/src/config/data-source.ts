import { DataSource } from "typeorm";
import { Appointment } from "../entities/Appointment";
import { Credential } from "../entities/Credential";
import { User } from "../entities/User";
import { DB_HOST, DB_PORT, DB_USER , DB_PASSWORD, DB_NAME } from "./envs";

export const AppDataSource = new DataSource({
    type: "postgres",
    host: DB_HOST,
    port: Number(DB_PORT),
    username: DB_USER,
    password: DB_PASSWORD,
    database: DB_NAME,
    // dropSchema: true,    
    synchronize: true,
    logging: true,
    entities: [Appointment, User, Credential],
    subscribers: [],
    migrations: [],
})
