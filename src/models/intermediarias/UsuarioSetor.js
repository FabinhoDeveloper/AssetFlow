import sequelize from "../../config/database.js";
import { DataTypes } from "sequelize";

const UsuarioSetor = sequelize.define("UsuarioSetor", {
    idUsuarioSetor: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    idWorkspace: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: "workspace",
            key: "idWorkspace"
        }
    }
}, {
    tableName: "usuarioSetor",
    timestamps: false
})

export default UsuarioSetor
