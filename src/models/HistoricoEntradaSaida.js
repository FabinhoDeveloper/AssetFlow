import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

const Historico = sequelize.define("historico", {
    idHistorico: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    tipoRegistro: {
        type: DataTypes.ENUM("Entrada", "Saída"),
        allowNull: false
    },
    dataRegistro: {
        type: DataTypes.DATE,
        allowNull: false
    }, 
    idSetor: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: "setor",
            key: "idSetor"
        }
    } 
},{
    tableName: "historico",
    timestamps: false
})

export default Historico
