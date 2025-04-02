import Workspace from "../models/Workspace.js";
import Usuario from "../models/Usuario.js";
import UsuarioWorkspace from "../models/intermediarias/UsuarioWorkspace.js";

export default class WorkspaceControllers {
    static async listarWorkspaces(req, res) {
        try {
            const workspaces = await Workspace.findAll()

            if (workspaces.length === 0) {
                return res.status(404).json({ sucesso: false, mensagem: "Nenhum Workspace encontrado!"})
            }

            return res.json({ sucesso: true, mensagem: "Workspaces listados com sucesso!", workspaces })
        } catch (error) {
            return res.status(500).json({ sucesso: false, mensagem: "Erro ao listar Workspaces!", erro: error.message });
        }
    }

    static async listarWorkspacesPorUsuario(req, res) {
        try {
            const { usuarioId } = req.params; // Pegamos o ID do usuário da URL
    
            const usuario = await Usuario.findByPk(usuarioId, {
                include: {
                    model: Workspace,
                    through: { attributes: [] }, // Oculta os dados da tabela intermediária
                },
            });
    
            if (!usuario) {
                return res.status(404).json({ mensagem: "Usuário não encontrado" });
            }
    
            res.json(usuario.Workspaces); // Retorna a lista de workspaces do usuário
        } catch (error) {
            res.status(500).json({ mensagem: "Erro interno do servidor" });
        }
    }
    
    static async cadastrarWorkspace(req, res) {
        const {nome, idUsuario} = req.body

        try {
            if (!nome) {
                return res.status(400).json({ sucesso: false, mensagem: "Preencha o nome do Workspace!" })
            }

            if (!idUsuario) {
                return res.status(400).json({ sucesso: false, mensagem: "Preencha o ID do usuário responsável pelo Workspace!" })
            }

            const usuario = await Usuario.findByPk(idUsuario)

            if (!usuario) {
                return res.status(404).json({ sucesso: false, mensagem: "Usuário não encontrado!" })
            }

            const workspaceCriado = await Workspace.create({nome})
            await UsuarioWorkspace.create({idUsuario, idWorkspace: workspaceCriado.idWorkspace, idTipoUsuarioWorkspace: 1})
            
            return res.status(201).json({ sucesso: true, mensagem: `Workspace ${nome} criado com sucesso!`})
        } catch (error) {
            return res.status(500).json({ sucesso: false, mensagem: "Erro ao cadastrar Workspace!", erro: error.message });
        }
    }

    static async excluirWorkspace(req, res) {
        const {idWorkspace} = req.params

        try {
            if (!idWorkspace) {
                return res.status(400).json({ sucesso: false, mensagem: "Preencha o nome do Workspace!" })
            }

            const workspace = await Workspace.findOne({where: {idWorkspace}})

            if (!workspace) {
                return res.status(404).json({ sucesso: false, mensagem: "Preencha o nome do Workspace!" })
            }

            await workspace.destroy();

            return res.json({ sucesso: true, mensagem: `Workspace ${workspace.nome} excluído com sucesso!`})
        } catch (error) {
            return res.status(500).json({ sucesso: false, mensagem: "Erro ao excluir Workspace!", erro: error.message });
        }
    }

    static async editarWorkspace(req, res) {
        const { idWorkspace } = req.params;
        const { nome } = req.body;
    
        try {     
            if (!nome) {
                return res.status(400).json({ sucesso: false, mensagem: "Preencha o nome do Workspace!" });
            }
            
            const workspace = await Workspace.findOne({ where: { idWorkspace } });
    
            
            if (!workspace) {
                return res.status(404).json({ sucesso: false, mensagem: "Workspace não encontrado!" });
            }
    
        
            await workspace.update({ nome });
    
            return res.json({ sucesso: true, mensagem: `Workspace atualizado para "${nome}" com sucesso!` });
        } catch (error) {
            return res.status(500).json({ sucesso: false, mensagem: "Erro ao editar Workspace!", erro: error.message });
        }
    }
}
