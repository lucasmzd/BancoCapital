"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
const typeorm_1 = require("typeorm");
const Appointment_1 = require("../entities/Appointment");
const Credential_1 = require("../entities/Credential");
const User_1 = require("../entities/User");
const envs_1 = require("./envs");
exports.AppDataSource = new typeorm_1.DataSource({
    type: "postgres",
    host: envs_1.DB_HOST,
    port: Number(envs_1.DB_PORT),
    username: envs_1.DB_USER,
    password: envs_1.DB_PASSWORD,
    database: envs_1.DB_NAME,
    // dropSchema: true,    
    synchronize: true,
    logging: true,
    entities: [Appointment_1.Appointment, User_1.User, Credential_1.Credential],
    subscribers: [],
    migrations: [],
});
