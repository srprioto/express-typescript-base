import dotenv from "dotenv";
import Server from "./src";
dotenv.config();

const server = new Server();
server.listen();