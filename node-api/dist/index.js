"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const app = (0, express_1.default)(); //instantiate express app
dotenv_1.default.config();
const port = process.env.PORT; //server port
//default route
app.get('/', (req, res) => {
    res.send("Express + Typescript Server");
});
app.listen(port); //start listening on port
