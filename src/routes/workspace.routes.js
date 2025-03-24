import express from "express"
import WorkspaceControllers from "../controllers/WorkspaceControllers.js"
import SetorControllers from "../controllers/SetorControllers.js"
const router = express.Router()

router.get("/listarPorUsuario/:idUsuario", WorkspaceControllers.listarWorkspacesPorUsuario)
router.post("/cadastrar", SetorControllers.cadastrarSetor)
router.delete("/excluir/:idWorkspace", )
router.patch("/editar/:idWorkspace", SetorControllers.editarSetor)

export default router
