import express from "express"
import ItemController from "../controllers/ItemControllers.js"
const router = express.Router()

router.get("/listarPorSetor/:idSetor", ItemController.listarItensPorSetor)
router.post("/cadastrar", ItemController.cadastrarItem)
router.delete("/excluir/:idItem", ItemController.excluirItem)
router.patch("/editar/:idItem", ItemController.editarItem)
router.post("/inserir/:idItem", ItemController.inserirItem)
router.post("/retirar/:idItem", ItemController.retirarItem)

export default router
