import Historico from "../models/HistoricoEntradaSaida.js"

async function cadastrarHistorico(req, res) {
    const {id} = req.body
}

async function excluirHistorico(req, res) {
    const {id} = req.body
}

export default {cadastrarHistorico, excluirHistorico}
