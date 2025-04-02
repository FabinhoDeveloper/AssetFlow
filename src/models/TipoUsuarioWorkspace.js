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
        await sequelize.sync(); // Garante que a tabela está criada antes

        const tipos = ["Administrador", "Co-Administrador", "Padrao"];
        
        for (const nome of tipos) {
            const existe = await TipoUsuarioWorkspace.findOne({ where: { nome } });
            if (!existe) {
                await TipoUsuarioWorkspace.create({ nome });
                console.log(`${nome} cadastrado.`);
            }
        }

    } catch (error) {
        console.error("Erro ao cadastrar tipos de usuário:", error);
    }
}

cadastrarTiposDeUsuarioWorkspace();

export default TipoUsuarioWorkspace
