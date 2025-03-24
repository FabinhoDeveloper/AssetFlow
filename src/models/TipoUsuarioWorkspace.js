import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

const TipoUsuarioWorkspace = sequelize.define("tipoUsuarioWorkspace", {
    idTipo: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nome: {
        type: DataTypes.ENUM("Administrador", "Co-Administrador", "Padrao"),
        allowNull: false
    }
}, {
    tableName: "tipoUsuarioWorkspace",
    timestamps: false
})

export default TipoUsuarioWorkspace
