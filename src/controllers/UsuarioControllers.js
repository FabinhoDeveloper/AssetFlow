import Usuario from "../models/Usuario.js";

export default class UsuarioControllers {
    static async login(req, res) {
        const {email, senha} = req.body        
    }

    static async cadastrarUsuario(req, res) {

    }

    static async excluirUsuario(req, res) {
        const {idUsuario} = req.params
    }

    static async editarUsuario(req, res) {
        const {idUsuario} = req.params
    }

    static async listarUsuariosPorWorkspace(req, res) {
        const {idWorkspace} = req.params
    }
}
