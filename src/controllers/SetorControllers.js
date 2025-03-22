import Setor from "../models/Setor.js";

export default class SetorControllers {
    static async cadastrarSetor(req, res) {
        const {nome, idWorkspace} = req.body

        try {
            const setorCadastrado = await Setor.create({nome, idWorkspace})
        } catch (error) {

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
