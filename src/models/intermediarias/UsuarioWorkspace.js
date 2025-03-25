import { DataTypes } from "sequelize";
import sequelize from "../../config/database.js";

const UsuarioWorkspace = sequelize.define("usuarioTipoUsuarioWorkspace", {
    idUsuarioWorkspace: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    idUsuario: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    idWorkspace: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    idTipoUsuarioWorkspace: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: "tipoUsuarioWorkspace",
            key: "idTipo"
        }
    }
}, {
    tableName: "UsuarioWorkspace",
    timestamps: false,
});

export default UsuarioWorkspace
