import Workspace from "./Workspace.js";
import Setor from "./Setor.js";
import Usuario from "./Usuario.js";
import Item from "./Item.js";
import Historico from "./HistoricoEntradaSaida.js";
import TipoUsuarioSetor from "./TipoUsuarioSetor.js";
import TipoUsuarioWorkspace from "./TipoUsuarioWorkspace.js";
import Cargo from "./Cargo.js";

// 📌 Tabelas intermediárias importadas
import UsuarioCargo from "./intermediarias/UsuarioCargo.js";
import UsuarioSetor from "./intermediarias/UsuarioSetor.js";
import UsuarioTipoUsuarioSetor from "./intermediarias/UsuarioTipoUsuarioSetor.js";
import UsuarioTipoUsuarioWorkspace from "./intermediarias/UsuarioTipoUsuarioWorkspace.js";

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

    // 📌 Muitos-para-muitos entre Usuario e TipoUsuarioSetor
    Usuario.belongsToMany(TipoUsuarioSetor, { through: UsuarioTipoUsuarioSetor, foreignKey: "idUsuario" });
    TipoUsuarioSetor.belongsToMany(Usuario, { through: UsuarioTipoUsuarioSetor, foreignKey: "idTipoUsuarioSetor" });
    	
    Usuario.belongsToMany(Workspace, { through: UsuarioTipoUsuarioWorkspace, foreignKey: "idUsuario" });
    Workspace.belongsToMany(Usuario, { through: UsuarioTipoUsuarioWorkspace, foreignKey: "idWorkspace" });

    // 📌 Muitos-para-muitos entre Usuario e TipoUsuarioWorkspace
    Usuario.belongsToMany(TipoUsuarioWorkspace, { through: UsuarioTipoUsuarioWorkspace, foreignKey: "idUsuario" });
    TipoUsuarioWorkspace.belongsToMany(Usuario, { through: UsuarioTipoUsuarioWorkspace, foreignKey: "idTipoUsuarioWorkspace" });

    Workspace.belongsToMany(TipoUsuarioWorkspace, { through: UsuarioTipoUsuarioWorkspace, foreignKey: "idWorkspace"});
    TipoUsuarioWorkspace.belongsToMany(Workspace, { through: UsuarioTipoUsuarioWorkspace, foreignKey: "idTipoUsuarioWorkspace"})
    
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
