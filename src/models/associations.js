import Workspace from "./Workspace.js";
import Setor from "./Setor.js";
import Usuario from "./Usuario.js";
import Item from "./Item.js";
import Historico from "./HistoricoEntradaSaida.js";

export default function setupAssociations() {
    // Relacionamento: Setor pertence a um Workspace, e um Workspace tem vários Setores
    Setor.belongsTo(Workspace, { foreignKey: "idWorkspace" });
    Workspace.hasMany(Setor, { foreignKey: "idWorkspace" });

    // Relacionamento: Usuário pertence a um ou mais Setores, e um Setor tem vários Usuários
    Usuario.belongsToMany(Setor, { through: "UsuarioSetor", foreignKey: "idUsuario" });
    Setor.belongsToMany(Usuario, { through: "UsuarioSetor", foreignKey: "idSetor" });

    // Relacionamento: Usuário pertence a um ou mais Workspaces, e um Workspace tem vários Usuários
    Usuario.belongsToMany(Workspace, { through: "UsuarioWorkspace", foreignKey: "idUsuario" });
    Workspace.belongsToMany(Usuario, { through: "UsuarioWorkspace", foreignKey: "idWorkspace" });

    // Relacionamento: Setor tem vários Itens, e um Item pertence a um Setor
    Item.belongsTo(Setor, { foreignKey: "idSetor" });
    Setor.hasMany(Item, { foreignKey: "idSetor" });

    // Relacionamento: Usuário pode cadastrar vários registros no Histórico, mas um registro pertence a um Usuário
    Historico.belongsTo(Usuario, { foreignKey: "idUsuario" });
    Usuario.hasMany(Historico, { foreignKey: "idUsuario" });

    // Relacionamento: Um Item pode estar em vários registros do Histórico, mas um registro do Histórico só possui um Item
    Historico.belongsTo(Item, { foreignKey: "idItem" });
    Item.hasMany(Historico, { foreignKey: "idItem" });
}
