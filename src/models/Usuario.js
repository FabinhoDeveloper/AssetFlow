import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

const Usuario = sequelize.define("usuario", {
    idUsuario: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    primeiroNome: {
        type: DataTypes.STRING,
        allowNull: false
    },
    ultimoNome: {
        type: DataTypes.STRING,
        allowNull: false
    },
    senha: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    cpf: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    estaAtivo: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
    },
},{
    tableName: "usuario",
    timestamps: false
})

export default Usuario
