import { DataTypes } from "sequelize";
import sequelize from "../../config/database.js";

const UsuarioTipoUsuarioWorkspace = sequelize.define("UsuarioTipoUsuarioWorkspace", {
    idUsuarioTipoWorkspace: {
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
    tableName: "usuarioTipoUsuarioWorkspace",
    timestamps: false
})

export default UsuarioTipoUsuarioWorkspace
