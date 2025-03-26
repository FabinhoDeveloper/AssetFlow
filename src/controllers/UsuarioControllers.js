import Usuario from "../models/Usuario.js";
import bcrypt from "bcrypt"

export default class UsuarioControllers {
    static async login(req, res) {
        const {email, senha} = req.body 
        
        try {
            
        } catch (error) {
            
        }
    }

    static async listarUsuarios(req, res) {
        try {
            const listaUsuarios = await Usuario.findAll()

            if (listaUsuarios.length === 0) {
                return res.status(404).json({ sucesso: false, mensagem: "Nenhum usuário encontrado!" })
            }

            return res.json({ sucesso: true, mensagem: "Usuários listados com sucesso!", listaUsuarios})
        } catch (error) {
            return res.status(500).json({ sucesso: false, mensagem: "Erro ao listar usuários!", erro: error.message });
        }
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

        try {
            if (!idUsuario) {
                return res.status(404).json({ sucesso: false, mensagem: "Preencha o ID do usuário!" })
            }

            const usuario = await Usuario.findOne({ where: {idUsuario}} )

            if (!usuario) {
                return res.status(404).json({ sucesso: false, mensagem: "Usuário não encontrado!" })
            }

            await usuario.destroy()

            return res.json({ sucesso: true, mensagem: `Usuário ${usuario.primeiroNome} ${usuario.ultimoNome} excluído com sucesso!`})
        } catch (error) {
            return res.status(500).json({ sucesso: false, mensagem: "Erro ao excluir usuário!", erro: error.message });
        }
    }

    static async editarUsuario(req, res) {
        const {idUsuario} = req.params
    }
}
