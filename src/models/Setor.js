import { DataTypes } from "sequelize";
import Workspace from "./Workspace.js";
import Usuario from "./Usuario.js";
import sequelize from "../config/database.js";

const Setor = sequelize.define("setor", {
    idSetor: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    }
})

Setor.belongsTo(Workspace, {foreignKey: "idWorkspace"})
Setor.hasMany(Usuario, {foreignKey: "idUsuario"})

export default Setor
