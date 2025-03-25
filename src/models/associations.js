import Workspace from "./Workspace.js";
import Setor from "./Setor.js";
import Usuario from "./Usuario.js";
import Item from "./Item.js";
import Historico from "./HistoricoEntradaSaida.js";
import Cargo from "./Cargo.js";

// 📌 Tabelas intermediárias importadas
import UsuarioCargo from "./intermediarias/UsuarioCargo.js";
import UsuarioSetor from "./intermediarias/UsuarioSetor.js";
import UsuarioWorkspace from "./intermediarias/UsuarioWorkspace.js"

export default function setupAssociations() {
    // 📌 Setor pertence a um Workspace (1-N)
    Setor.belongsTo(Workspace, { foreignKey: "idWorkspace" });
    Workspace.hasMany(Setor, { foreignKey: "idWorkspace" });

    // 📌 Muitos-para-muitos entre Usuario e Setor
    Usuario.belongsToMany(Setor, { through: UsuarioSetor, foreignKey: "idUsuario" });
    Setor.belongsToMany(Usuario, { through: UsuarioSetor, foreignKey: "idSetor" });

    // 📌 Muitos-para-muitos entre Usuario e Cargo
    Usuario.belongsToMany(Cargo, { through: UsuarioCargo, foreignKey: "idUsuario" });
    Cargo.belongsToMany(Usuario, { through: UsuarioCargo, foreignKey: "idCargo" });

    // // 📌 Muitos-para-muitos entre Usuario e TipoUsuarioSetor
    // Usuario.belongsToMany(TipoUsuarioSetor, { through: "UsuarioTipoUsuarioSetor", foreignKey: "idUsuario" });
    // TipoUsuarioSetor.belongsToMany(Usuario, { through: "UsuarioTipoUsuarioSetor", foreignKey: "idTipoUsuarioSetor" });
    
    // Um usuario pertence a vários workspaces
    Usuario.belongsToMany(Workspace, { through: UsuarioWorkspace, foreignKey: "idUsuario" })
    Workspace.belongsToMany(Usuario, { through: UsuarioWorkspace, foreignKey: "idWorkspace"})

    // 📌 Item pertence a um Setor (1-N)
    Item.belongsTo(Setor, { foreignKey: "idSetor" });
    Setor.hasMany(Item, { foreignKey: "idSetor" });
    
    // 📌 Cargo pertence a um Setor (1-N)
    Cargo.belongsTo(Setor, { foreignKey: 'idSetor' })
    Setor.hasMany(Item, { foreignKey: 'idSetor' })

    // 📌 Histórico de entrada/saída pertence a um Usuario (1-N)
    Historico.belongsTo(Usuario, { foreignKey: "idUsuario" });
    Usuario.hasMany(Historico, { foreignKey: "idUsuario" });

    // 📌 Histórico de entrada/saída pertence a um Item (1-N)
    Historico.belongsTo(Item, { foreignKey: "idItem" });
    Item.hasMany(Historico, { foreignKey: "idItem" });
}
