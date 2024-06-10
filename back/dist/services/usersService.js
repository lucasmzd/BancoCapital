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
exports.registerUserService = exports.getUserByIdService = exports.getAllUsersService = void 0;
const data_source_1 = require("../config/data-source");
const CredentialRepository_1 = require("../Repositories/CredentialRepository");
const UserRepository_1 = require("../Repositories/UserRepository");
const credentialsService_1 = require("./credentialsService");
// import IUser from "../interfaces/IUser";
const getAllUsersService = () => __awaiter(void 0, void 0, void 0, function* () {
    const users = yield UserRepository_1.UserRepository.find({ relations: { appointments: true } });
    return users;
});
exports.getAllUsersService = getAllUsersService;
const getUserByIdService = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const founduser = yield UserRepository_1.UserRepository.findOne({ where: { id }, relations: ['appointments'] });
    if (!founduser)
        throw Error("El usuario no fue encontrado.");
    return founduser;
});
exports.getUserByIdService = getUserByIdService;
const registerUserService = (createUserDto) => __awaiter(void 0, void 0, void 0, function* () {
    const QueryRunner = data_source_1.AppDataSource.createQueryRunner();
    yield QueryRunner.connect();
    try {
        yield QueryRunner.startTransaction();
        const validateMail = yield UserRepository_1.UserRepository.findOneBy({ email: createUserDto.email });
        if (validateMail)
            throw Error("ya existe un usuario con ese E-mail");
        const validateNDni = yield UserRepository_1.UserRepository.findOneBy({ nDni: createUserDto.nDni });
        if (validateNDni)
            throw Error("ya existe un usuario con ese DNI");
        const validateUsername = yield CredentialRepository_1.CredentialsRepository.findOneBy({ username: createUserDto.username });
        if (validateUsername)
            throw Error("ya existe un usuario con ese usuario");
        const newCredential = yield (0, credentialsService_1.createCredentialsService)({
            username: createUserDto.username,
            password: createUserDto.password
        });
        const newUser = yield UserRepository_1.UserRepository.create(Object.assign(Object.assign({}, createUserDto), { credential: newCredential.id }));
        yield QueryRunner.manager.save(newUser);
        yield QueryRunner.commitTransaction();
        return newUser;
    }
    catch (error) {
        yield QueryRunner.rollbackTransaction();
        throw Error(error.message);
    }
    finally {
        yield QueryRunner.release();
    }
});
exports.registerUserService = registerUserService;
