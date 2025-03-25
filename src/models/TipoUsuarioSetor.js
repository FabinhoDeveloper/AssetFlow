import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

const TipoUsuarioSetor = sequelize.define("tipoUsuarioSetor", {
    idTipo: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nome: {
        type: DataTypes.ENUM("Administrador", "Gestor", "Padrao", "Observador"),
        allowNull: false
    }
}, {
    tableName: "tipoUsuarioSetor",
    timestamps: false
})

async function cadastrarTiposDeUsuarioSetor() {
    const temAdministrador = await TipoUsuarioSetor.findOne({ where: { nome: "Administrador" } });
    const temGestor = await TipoUsuarioSetor.findOne({ where: { nome: "Gestor" } });
    const temPadrao = await TipoUsuarioSetor.findOne({ where: { nome: "Padrao" } });
    const temObservador = await TipoUsuarioSetor.findOne({ where: { nome: "Observador" } });

    if (!temAdministrador) {
        await TipoUsuarioWorkspace.create({ nome: "Administrador" });
    }

    if (!temGestor) {
        await TipoUsuarioWorkspace.create({ nome: "Gestor" });
    }

    if (!temPadrao) {
        await TipoUsuarioWorkspace.create({ nome: "Padrao" });
    }

    
    if (!temObservador) {
        await TipoUsuarioWorkspace.create({ nome: "Observador" });
    }
}


cadastrarTiposDeUsuarioSetor()

export default TipoUsuarioSetor
