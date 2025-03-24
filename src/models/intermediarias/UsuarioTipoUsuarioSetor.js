import sequelize from "../../config/database.js";
import { DataTypes } from "sequelize";

const UsuarioTipoUsuarioSetor = sequelize.define("UsuarioTipoUsuarioSetor", {
    idUsuarioTipoUsuarioSetor: {
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
    tableName: "usuarioTipoUsuarioSetor",
    timestamps: false
})

export default UsuarioTipoUsuarioSetor
