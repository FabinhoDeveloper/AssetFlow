import { DataTypes } from "sequelize";
import sequelize from "../../config/database.js";

const UsuarioTipoUsuarioWorkspace = sequelize.define("usuarioTipoUsuarioWorkspace", {
    idUsuarioTipoUsuarioWorkspace: {
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
        allowNull: false
    }
}, {
    tableName: "UsuarioTipoUsuarioWorkspace",
    timestamps: false,
    indexes: [
        {
            unique: true,
            fields: ["idUsuario", "idWorkspace", "idTipoUsuarioWorkspace"]
        }
    ]
});


export default UsuarioTipoUsuarioWorkspace
