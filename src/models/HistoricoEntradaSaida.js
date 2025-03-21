import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

const Historico = sequelize.define("historico", {
    idHistorico: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    tipoRegistro: {
        type: DataTypes.STRING,
        allowNull: false
    },
    dataRegistro: {
        type: DataTypes.DATE,
        allowNull: false
    }
})

export default Historico
