import Item from "../models/Item.js";

export default class ItemController {
    static async listarItensPorSetor(req, res) {
        const {idSetor} = req.body
    }

    static async cadastrarItem(req, res) {
        const {nome, descricao, quantidade, idSetor} = req.body
        
        try {
            const itemCadastrado = await Item.create({ nome, descricao, quantidade, idSetor })
        } catch (error) {
            return res.status(404).json({sucesso: false, mensagem})
        }
    }
    
    static async deletarItem(req, res) {
        const {idItem} = req.params
    }

    static async editarItem(req, res) {
        const {idItem} = req.params
        const {nome, descricao, quantidade} = req.body
    }

    static async inserirItem(req, res) {
        const {idItem} = req.params
        const {quantidade} = req.body
    }

    static async retirarItem(req, res) {
        const {idItem} = req.params
        const {quantidade} = req.body
    }
}
