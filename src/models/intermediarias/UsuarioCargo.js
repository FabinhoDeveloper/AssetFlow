import { DataTypes } from "sequelize";
import sequelize from "../../config/database.js";

const UsuarioCargo = sequelize.define("UsuarioCargo", {
    idUsuarioCargo: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    idSetor: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: "setor",
            key: "idSetor"
        }
    }
}, {
    tableName: "usuarioCargo",
    timestamps: false
})

export default UsuarioCargo
