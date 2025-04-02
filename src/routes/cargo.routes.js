import express from "express"
import CargoControllers from "../controllers/CargoControllers.js"
const router = express.Router()

router.get("/listar/:idSetor", CargoControllers)
router.post("/cadastrar", HistoricoControllers.cadastrarRegistroNoHistorico)

export default router
