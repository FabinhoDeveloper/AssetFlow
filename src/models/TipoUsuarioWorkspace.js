import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

const TipoUsuarioWorkspace = sequelize.define("tipoUsuarioWorkspace", {
    idTipo: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nome: {
        type: DataTypes.ENUM("Administrador", "Co-Administrador", "Padrao"),
        allowNull: false
    }
}, {
    tableName: "tipoUsuarioWorkspace",
    timestamps: false
})

 async function cadastrarTiposDeUsuarioWorkspace() {
     const temAdministrador = await TipoUsuarioWorkspace.findOne({nome: "Administrador"})
     const temCoAdministrador = await TipoUsuarioWorkspace.findOne({nome: "Co-Administrador"})
     const temParticipante = await TipoUsuarioWorkspace.findOne({nome: "Padrao"})

     if (!temAdministrador) {
         await TipoUsuarioWorkspace.create({nome: "Administrador"})
     } 

     if (!temCoAdministrador) {
         await TipoUsuarioWorkspace.create({nome: "Co-Administrador"})
     }

     if (!temParticipante) {
         await TipoUsuarioWorkspace.create({nome: "Padrao"})
     }
 }

 cadastrarTiposDeUsuarioWorkspace()

export default TipoUsuarioWorkspace
