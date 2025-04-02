import express from "express"
import SetorControllers from "../controllers/SetorControllers.js"
const router = express.Router()

router.get("/listar", SetorControllers.listarSetores)
router.get("/listar-usuarios/:idSetor", SetorControllers.listarUsuariosPorSetor)
router.get("/listar-cargos/:idSetor", SetorControllers.listarCargosPorSetor)
router.post("/cadastrar", SetorControllers.cadastrarSetor)
router.delete("/excluir/:idSetor", SetorControllers.excluirSetor)
router.patch("/editar/:idSetor", SetorControllers.editarSetor)
router.post("/inserir-usuario/:idSetor", SetorControllers.inserirUsuarioNoSetor)
router.delete("/remover-usuario/:idSetor", SetorControllers.removerUsuarioNoSetor)

export default router
