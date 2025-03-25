import express from "express"
import WorkspaceControllers from "../controllers/WorkspaceControllers.js"
import SetorControllers from "../controllers/SetorControllers.js"
const router = express.Router()

router.get("/listar", WorkspaceControllers.listarWorkspaces)
router.get("/listarPorUsuario/:idUsuario", WorkspaceControllers.listarWorkspacesPorUsuario)
router.post("/cadastrar", WorkspaceControllers.cadastrarWorkspace)
router.delete("/excluir/:idWorkspace", WorkspaceControllers.excluirWorkspace)
router.patch("/editar/:idWorkspace", WorkspaceControllers.editarWorkspace)

export default router
