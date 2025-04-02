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
    try {
        const temAdministrador = await TipoUsuarioWorkspace.findOne({ where: { nome: "Administrador" } });
        const temCoAdministrador = await TipoUsuarioWorkspace.findOne({ where: { nome: "Co-Administrador" } });
        const temParticipante = await TipoUsuarioWorkspace.findOne({ where: { nome: "Padrao" } });

        if (!temAdministrador) {
            await TipoUsuarioWorkspace.create({ nome: "Administrador" });
            console.log("Administrador cadastrado.");
        }

        if (!temCoAdministrador) {
            await TipoUsuarioWorkspace.create({ nome: "Co-Administrador" });
            console.log("Co-Administrador cadastrado.");
        }

        if (!temParticipante) {
            await TipoUsuarioWorkspace.create({ nome: "Padrao" });
            console.log("Participante cadastrado.");
        }

    } catch (error) {
        console.error("Erro ao cadastrar tipos de usuário:", error);
    }
}

cadastrarTiposDeUsuarioWorkspace()

export default TipoUsuarioWorkspace
