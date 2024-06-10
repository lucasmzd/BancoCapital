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
exports.loginUser = exports.registerUser = exports.getUserById = exports.getAllUsers = void 0;
const UserRepository_1 = require("../Repositories/UserRepository");
const usersService_1 = require("../services/usersService");
const credentialsService_1 = require("../services/credentialsService");
// import IUser from "../interfaces/IUser";
const getAllUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const users = yield (0, usersService_1.getAllUsersService)();
    res.status(200).json(users);
});
exports.getAllUsers = getAllUsers;
const getUserById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const founduser = yield (0, usersService_1.getUserByIdService)(Number(id));
        res.status(200).json(founduser);
    }
    catch (error) {
        res.status(404).json({ message: error.message });
    }
});
exports.getUserById = getUserById;
const registerUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, email, birthdate, nDni, username, password } = req.body;
        if (typeof name === 'string' &&
            typeof email === 'string' &&
            typeof birthdate === 'string' &&
            typeof nDni === 'number' &&
            typeof username === 'string' &&
            typeof password === 'string') {
            const newUser = yield (0, usersService_1.registerUserService)({ name, email, birthdate, nDni, username, password });
            return res.status(201).json(newUser);
        }
        else {
            throw new Error('Datos no válidos, asegúrese de completarlos correctamente.');
        }
    }
    catch (error) {
        return res.status(400).json({ message: `${error}` });
    }
});
exports.registerUser = registerUser;
const loginUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const login = req.body;
        const checkIn = yield (0, credentialsService_1.validateCredentials)(login);
        const findUser = yield UserRepository_1.UserRepository.findOneBy({ id: checkIn });
        if (!findUser)
            throw new Error('Usuario no encontrado.');
        res.send({
            login: true,
            user: {
                id: findUser.id,
                name: findUser.name,
                email: findUser.email,
                birthdate: findUser.birthdate,
                nDNI: findUser.nDni
            }
        });
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
});
exports.loginUser = loginUser;
