import Setor from "../models/Setor.js";
import Workspace from "../models/Workspace.js";
import Usuario from "../models/Usuario.js";
import UsuarioSetor from "../models/intermediarias/UsuarioSetor.js";

export default class SetorControllers {
    static async listarSetores(req, res) { // Funciona
        try {
            const setores = await Setor.findAll()

            if (setores.length === 0) {
                return res.status(404).json({ sucesso: false, mensagem: "Nenhum setor encontrado!" })
            }

            return res.json({ sucesso: true, mensagem: "Setores listados com sucesso!", setores})
        } catch (error) {
            return res.status(500).json({ sucesso: false, mensagem: "Erro ao listar setores!", erro: error.message });
        }
    }

    static async listarUsuarios(req, res) {
        
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
    
    static async excluirSetor(req, res) { // Funciona
        const {idSetor} = req.params

        try {
            if (!idSetor) {
                return res.status(400).json({ sucesso: false, mensagem: "Preencha todos o ID do setor!" });
            }

            const setor = await Setor.findByPk(idSetor);
            if (!setor) {
                return res.status(404).json({ sucesso: false, mensagem: "Setor não encontrado!" });
            }

            await setor.destroy();
            return res.json({ sucesso: true, mensagem: "Setor excluído com sucesso!" });
        } catch (error) {
            return res.status(500).json({ sucesso: false, mensagem: "Erro ao excluir setor!", erro: error.message });
        }
    }

    static async editarSetor(req, res) {
        const {idSetor} = req.params
    }
    
    static async inserirUsuarioNoSetor(req, res) { // Funciona
        const { idSetor } = req.params;
        const { idUsuario } = req.body;

        try {
            const setor = await Setor.findByPk(idSetor);
            if (!setor) {
                return res.status(404).json({ sucesso: false, mensagem: "Setor não encontrado!" });
            }

            const usuario = await Usuario.findByPk(idUsuario);
            if (!usuario) {
                return res.status(404).json({ sucesso: false, mensagem: "Usuário não encontrado!" });
            }

            const [usuarioSetor, created] = await UsuarioSetor.findOrCreate({ where: { idUsuario, idSetor } });
        
            if (!created) {
                return res.status(400).json({ sucesso: false, mensagem: "Usuário já está no setor!" });
            }

            return res.json({ sucesso: true, mensagem: "Usuário adicionado ao setor com sucesso!" });
        } catch (error) {
            return res.status(500).json({ sucesso: false, mensagem: "Erro ao adicionar usuário ao setor!", erro: error.message });
        }
    }

    static async removerUsuarioNoSetor(req, res) {
        const { idSetor } = req.params;
        const { idUsuario } = req.body;
    
        try {
            const setor = await Setor.findByPk(idSetor);
            if (!setor) {
                return res.status(404).json({ sucesso: false, mensagem: "Setor não encontrado!" });
            }
    
            const usuario = await Usuario.findByPk(idUsuario);
            if (!usuario) {
                return res.status(404).json({ sucesso: false, mensagem: "Usuário não encontrado!" });
            }
    
            const usuarioSetor = await UsuarioSetor.findOne({ where: { idUsuario, idSetor } });
            if (!usuarioSetor) {
                return res.status(404).json({ sucesso: false, mensagem: "Usuário não está associado a este setor!" });
            }
    
            await usuarioSetor.destroy();
    
            return res.json({ sucesso: true, mensagem: "Usuário removido do setor com sucesso!" });
        } catch (error) {
            return res.status(500).json({ sucesso: false, mensagem: "Erro ao remover usuário do setor!", erro: error.message });
        }
    }
    
}
