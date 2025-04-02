import Cargo from "../models/Cargo.js";
import Setor from "../models/Setor.js";

export default class CargoControllers {
    static async listarCargosPorSetor(req, res) {
        
    }

    static async cadastrarCargo(req, res) {
        const {nome, idSetor} = req.body

        try {
            if (!nome) {
                return res.status(400).json({ sucesso: false, mensagem: "Preencha o nome do cargo!" })
            }

            if (!idSetor) {
                return res.status(400).json({ sucesso: false, mensagem: "Preencha o ID do setor!" })
            }

            const setor = await Setor.findByPk({ idSetor })

            if (!setor) {
                return res.status(404).json({ sucesso: false, mensagem: "Setor não encontrado ou não cadastrado!" })
            }

            const cargoCriado = await Cargo.create({ nome, idSetor })

            return res.json({ sucesso: true, mensagem: `Cargo ${cargoCriado.nome} cadastrado com sucesso!`})
        } catch (error) {
            return res.status(500).json({ sucesso: false, mensagem: "Erro ao cadastrar cargo!", erro: error.message });
        }
    }

    static async editarCargo(req, res) {
        const {idCargo} = req.params
        const {nome} = req.body

        try {
            if (!idCargo) {
                return res.status(400).json({ sucesso: false, mensagem: "ID do cargo não fornecido!" })
            }

            if (!nome) {
                return res.status(400).json({ sucesso: false, mensagem: "Preencha o nome do cargo!" })
            }

            const cargo = await Cargo.findByPk(idCargo)
            cargo.nome = nome

            
        } catch (error) {
            return res.status(500).json({ sucesso: false, mensagem: "Erro ao cadastrar cargo!", erro: error.message });

        }
    }

    static async excluirCargo(req, res) {
        
    }
}