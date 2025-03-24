import express from "express"
import UsuarioControllers from "../controllers/UsuarioControllers.js"
const router = express.Router()

router.post("/login", UsuarioControllers.login)
router.post("/cadastrar", UsuarioControllers.cadastrarUsuario)
router.delete("/excluir/:idUsuario", UsuarioControllers.excluirUsuario)
router.patch("/editar/:idUsuario", UsuarioControllers.editarUsuario)
router.get("/listarPorWorkspace/:idWorkspace", UsuarioControllers.listarUsuariosPorWorkspace)

export default router
