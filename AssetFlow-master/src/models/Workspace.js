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

export default Workspace
