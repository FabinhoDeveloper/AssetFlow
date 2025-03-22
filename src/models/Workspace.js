import { DataTypes } from "sequelize";
import Setor from "./Setor.js";
import sequelize from "../config/database.js";

const Workspace = sequelize.define("workspace", {
    idWorkspace: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    }
},{
    tableName: "workspace",
    timestamps: false
})

Setor.belongsTo(Workspace, {foreignKey: "idWorkspace"})
Workspace.hasMany(Setor, {foreignKey: "idWorkspace"})

export default Workspace
