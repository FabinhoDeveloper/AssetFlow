import express from "express"
import CargoControllers from "../controllers/CargoControllers.js"
const router = express.Router()

router.post("/cadastrar", CargoControllers.cadastrarCargo)

export default router
