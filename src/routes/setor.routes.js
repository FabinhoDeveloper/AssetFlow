import express from "express"
import SetorControllers from "../controllers/SetorControllers.js"
const router = express.Router()

router.get("/listar-por-workspace", SetorControllers.listarSetorPorWorkspace)
router.post("/cadastrar", SetorControllers.cadastrarSetor)
router.delete("/excluir/:idSetor", SetorControllers.excluirSetor)
router.patch("/editar/:idSetor", SetorControllers.editarSetor)
router.post("/inserir-usuario/:idSetor", SetorControllers.inserirUsuarioNoSetor)
router.post("/remover-usuario/:idSetor", SetorControllers.removerUsuarioNoSetor)

export default router
