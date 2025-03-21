import { DataTypes } from "sequelize";
import Setor from "./Setor.js";
import sequelize from "../config/database.js";

const Usuario = sequelize.define("usuario", {
    idUsuario: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nome: {
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
    cargo: {
        type: DataTypes.STRING,
        allowNull: false
    },
    estaAtivo: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
    },
    tipo: {
        type: DataTypes.STRING,
        allowNull: false
    }
})

Usuario.belongsTo(Setor, {foreignKey: "idSetor"})

export default Usuario
