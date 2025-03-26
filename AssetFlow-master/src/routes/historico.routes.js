import express from "express"
import HistoricoControllers from "../controllers/HistoricoControllers.js"
const router = express.Router()

router.get("/listar/:idSetor", HistoricoControllers.listarHistoricoPorSetor)
router.post("/cadastrar", HistoricoControllers.cadastrarRegistroNoHistorico)

export default router
