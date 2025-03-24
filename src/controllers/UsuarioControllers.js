import Usuario from "../models/Usuario.js";
import bcrypt from "bcrypt"

export default class UsuarioControllers {
    static async login(req, res) {
        const {email, senha} = req.body        
    }

    static async cadastrarUsuario(req, res) {
        const {primeiroNome, ultimoNome, senha, email, cpf} = req.body

        try {
            if (!primeiroNome || !ultimoNome || !senha || !email || !cpf) {
                return res.status(400).json({ sucesso: false, mensagem: "Preencha todos os campos!"})
            }

            const cpfExistente = await Usuario.findOne({ where: { cpf } })
            if (cpfExistente) {
                return res.status(409).json({ sucesso: false, mensagem: "CPF já cadastrado" })
            }

            const cpfRegex = /^\d{11}$/;
            if (!cpfRegex.test(cpf)) {
                return res.status(409).json({ sucesso: false, mensagem: "CPF inválido" })
            }

            const emailExistente = await Usuario.findOne({ where: { email } })
            if (emailExistente) {
                return res.status(409).json({ sucesso: false, mensagem: "Email já cadastrado" })
            }

            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                return res.status(400).json({ sucesso: false, mensagem: "E-mail inválido!" });
            }

            if (senha.length < 6) {
                return res.status(400).json({ sucesso: false, mensagem: "A senha deve ter no mínimo 6 caracteres!" });
            }

            const senhaHash = await bcrypt.hash(senha, 10)

            const usuarioCriado = await Usuario.create({ primeiroNome, ultimoNome, senha: senhaHash, email, cpf })

            return res.json({ sucesso: true, mensagem: `Usuário ${usuarioCriado.primeiroNome} criado com sucesso!`})
        } catch (error) {
            return res.status(500).json({ sucesso: false, mensagem: "Erro ao cadastrar usuário!", erro: error.message });
        }
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
