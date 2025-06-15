"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./src/app/app"));
const data_base_conection_1 = require("./src/db/data_base_conection");
const PORT = process.env.PORT || 3001;
app_1.default.listen(PORT, () => {
    console.log("Servidor escuchando en http://localhost:" + PORT);
});
(0, data_base_conection_1.testConnection)();
