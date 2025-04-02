import express from "express"
import UsuarioControllers from "../controllers/UsuarioControllers.js"
const router = express.Router()

router.post("/login", UsuarioControllers.login)
router.get("/listar", UsuarioControllers.listarUsuarios)
router.get("/listarPorWorkspace/:idUsuario") // Lista todos os usuários em um Workspace
router.post("/cadastrar", UsuarioControllers.cadastrarUsuario)
router.delete("/excluir/:idUsuario", UsuarioControllers.excluirUsuario)
router.patch("/editar/:idUsuario", UsuarioControllers.editarUsuario)

export default router
