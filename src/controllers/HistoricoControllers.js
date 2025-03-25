import Historico from "../models/HistoricoEntradaSaida.js"

export default class HistoricoControllers {
    static async listarHistoricoPorSetor() {
        const {idSetor} = req.params

        try {
            const historico = await Historico.findAll()

            if (historico.length === 0) {
                return res.json({ sucesso: false, mensagem: "Nenhum registro encontrado no histórico!" })
            }
        } catch (error) {
            return res.status(500).json({ sucesso: false, mensagem: "Erro ao listar registros no histórico!", erro: error.message });
        }
    }

    static async cadastrarRegistroNoHistorico(req, res) {
        const {idItem, idUsuario, tipoRegistro, dataRegistro} = req.body

        try {
            const historico = await Historico.create({})
        
            
        } catch (error) {
            return res.status(500).json({ sucesso: false, mensagem: "Erro ao cadastrar registro no histórico!", erro: error.message });
        }
    }

}
