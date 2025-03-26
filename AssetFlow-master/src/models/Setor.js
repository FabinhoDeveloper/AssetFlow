import { DataTypes } from "sequelize";
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
},{
    tableName: "setor",
    timestamps: false
})

export default Setor
