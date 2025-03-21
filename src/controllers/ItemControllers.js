import Item from "../models/Item";

async function cadastrarItem(req, res) {
    const {nome, descricao, quantidade, idSetor} = req.body

    try {
        const itemCadastrado = await Item.create({ nome, descricao, quantidade, idSetor })
    } catch (error) {
        return res.status(404).json({sucesso: false, mensagem})
    }
}

async function deletarItem(req, res) {
    const {id} = req.body

    
}

export default {cadastrarItem, deletarItem}
