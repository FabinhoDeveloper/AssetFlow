import express from "express"
import WorkspaceControllers from "../controllers/WorkspaceControllers.js"
const router = express.Router()

router.get("/listar", WorkspaceControllers.listarWorkspaces)
router.get("/listar-setores/:idWorkspace", WorkspaceControllers.listarSetores)
router.get("/listar-por-usuario/:idUsuario", WorkspaceControllers.listarWorkspacesPorUsuario) // Lista todos os Workspaces de um usuário
router.post("/cadastrar", WorkspaceControllers.cadastrarWorkspace)
router.delete("/excluir/:idWorkspace", WorkspaceControllers.excluirWorkspace)
router.patch("/editar/:idWorkspace", WorkspaceControllers.editarWorkspace)

export default router
