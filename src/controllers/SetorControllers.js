import Setor from "../models/Setor.js";
import Workspace from "../models/Workspace.js";

export default class SetorControllers {
    static async listarSetorPorUsuario(req, res) {
        
    }

    static async cadastrarSetor(req, res) { // Funciona
        const {nome, idWorkspace} = req.body

        try {
            if (!nome | !idWorkspace) {
                return res.status(400).json({ sucesso: false, mensagem: "Preencha todos os campos!" });
            }

            const workspace = await Workspace.findByPk(idWorkspace);
            if (!workspace) {
                return res.status(404).json({ sucesso: false, mensagem: "Workspace não encontrado!" });
            }

            const setorCriado = await Setor.create({ nome, idWorkspace });

            return res.status(201).json({ sucesso: true, mensagem: "Setor criado com sucesso!", setor: setorCriado });
        } catch (error) {
            return res.status(500).json({ sucesso: false, mensagem: "Erro ao cadastrar setor!", erro: error.message });
        }
    }   
    
    static async excluirSetor(req, res) {
        const {idSetor} = req.params
    }

    static async editarSetor(req, res) {
        const {idSetor} = req.params
    }
    
    static async inserirUsuarioNoSetor(req, res) {
        const {idSetor} = req.params
        const {idUsuario} = req.body
    }

    static async removerUsuarioNoSetor(req, res) {
        const {idSetor} = req.params
        const {idUsuario} = req.body
    }
}
