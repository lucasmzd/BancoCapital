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
exports.validateCredentials = exports.createCredentialsService = void 0;
const CredentialRepository_1 = require("../Repositories/CredentialRepository");
// import { UserRepository } from "../Repositories/UserRepository";
const createCredentialsService = (createCredentialDto) => __awaiter(void 0, void 0, void 0, function* () {
    const newCredential = CredentialRepository_1.CredentialsRepository.create(createCredentialDto);
    yield CredentialRepository_1.CredentialsRepository.save(newCredential);
    return newCredential;
});
exports.createCredentialsService = createCredentialsService;
const validateCredentials = (credentialDto) => __awaiter(void 0, void 0, void 0, function* () {
    const findCredential = yield CredentialRepository_1.CredentialsRepository.findOneBy({ username: credentialDto.username });
    if (!findCredential) {
        throw new Error('El usuario no existe.');
    }
    ;
    if (findCredential.password !== credentialDto.password)
        throw new Error('Contraseña incorrecta.');
    return (findCredential.id);
});
exports.validateCredentials = validateCredentials;
