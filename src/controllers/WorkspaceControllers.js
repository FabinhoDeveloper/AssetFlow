import Workspace from "../models/Workspace.js";

export default class WorkspaceControllers {
    static async listarWorkspacesPorUsuario(req, res) {
        const {idUsuario} = req.params
    }
    
    static async cadastrarWorkspace(req, res) {

    }

    static async excluirWorkspace(req, res) {
        const {idWorkspace} = req.params
    }

    static async editarWorkspace(req, res) {
        const {idWorkspace} = req.params
    }
}
