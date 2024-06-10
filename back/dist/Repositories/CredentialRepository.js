"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CredentialsRepository = void 0;
const data_source_1 = require("../config/data-source");
const Credential_1 = require("../entities/Credential");
exports.CredentialsRepository = data_source_1.AppDataSource.getRepository(Credential_1.Credential);
