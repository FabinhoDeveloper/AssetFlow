import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

const Cargo = sequelize.define('cargo', {
    idCargo: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    tableName: 'cargo',
    timestamps: false
});

export default Cargo;
