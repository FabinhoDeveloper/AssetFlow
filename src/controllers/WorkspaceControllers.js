import Workspace from "../models/Workspace.js";
import Usuario from "../models/Usuario.js";
import UsuarioTipoUsuarioWorkspace from "../models/intermediarias/UsuarioTipoUsuarioWorkspace.js";

export default class WorkspaceControllers {
    static async listarWorkspacesPorUsuario(req, res) {
        const {idUsuario} = req.params
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
            await UsuarioTipoUsuarioWorkspace.create({idWorkspace: workspaceCriado.idWorkspace, idUsuario, idTipoUsuarioWorkspace: 1})
            
            return res.status(201).json({ sucesso: true, mensagem: `Workspace ${nome} criado com sucesso!`})
        } catch (error) {
            return res.status(500).json({ sucesso: false, mensagem: "Erro ao cadastrar Workspace!", erro: error.message });
        }
    }

    static async excluirWorkspace(req, res) {
        const {idWorkspace} = req.params
    }

    static async editarWorkspace(req, res) {
        const {idWorkspace} = req.params
    }
}
