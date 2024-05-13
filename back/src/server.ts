import cors from "cors";
import express from "express";
import morgan from "morgan";
import router from "./routes/homeRouter";

const server = express();

server.use(cors());
server.use(morgan("dev"));
server.use(express.json());
server.use(router);

export default server;
