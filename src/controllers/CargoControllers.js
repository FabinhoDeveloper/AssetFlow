import Cargo from "../models/Cargo.js";

export default class CargoControllers {
    static async listarCargosPorSetor(req, res) {
        try {
            const listaCargos = await Cargo.findAll()

            if (listaCargos.length === 0) {
                return res.status(404).json({ sucesso: false, mensagem: "Nenhum cargo encontrado! "})
            }

            return res.json({ sucesso: true, listaCargos })
        } catch (error) {
            return res.status(500).json({ sucesso: false, mensagem: "Erro ao listar cargos!", erro: error.message });
        }
    }

    static async cadastrarCargo(req, res) {
        const {nome, idSetor} = req.body
            
        try {
            if (!nome) {
                return res.status(400).json({ sucesso: false, mensagem: "Preencha o nome do cargo!" })
            }

            const cargoCriado = await Cargo.create({ nome })

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


            const cargo = await Cargo.findByPk({ idCargo })
        } catch (error) {
            
        }
    }

    static async excluirCargo(req, res) {
        
    }
}