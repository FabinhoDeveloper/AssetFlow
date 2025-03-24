import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

const TipoUsuarioSetor = sequelize.define("tipoUsuarioSetor", {
    idTipo: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nome: {
        type: DataTypes.ENUM("Administrador", "Gestor", "Padrao", "Observador"),
        allowNull: false
    }
}, {
    tableName: "tipoUsuarioSetor",
    timestamps: false
})

export default TipoUsuarioSetor
