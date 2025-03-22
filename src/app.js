import express from "express"
import { config } from "dotenv"
import sequelize from "./config/database.js"

// Import das rotas

import historicoRoutes from "./routes/historico.routes.js" 
import itemRoutes from "./routes/item.routes.js" 
import setorRoutes from "./routes/setor.routes.js" 
import usuarioRoutes from "./routes/usuario.routes.js" 
import workspaceRoutes from "./routes/workspace.routes.js" 
import setupAssociations from "./models/associations.js"

const app = express() // Instancia do express
config() // Variáveis de ambiente

// Rota padrão da API

app.get("/", (req, res) => {
    res.json({mensagem: "Olá, API do AssetFlow!"})
})

// Rotas da API

app.use("/historico", historicoRoutes)
app.use("/item", itemRoutes)
app.use("/setor", setorRoutes)
app.use("/usuario", usuarioRoutes)
app.use("/workspace", workspaceRoutes)

// Sincronização do banco de dados

setupAssociations()

sequelize.sync({force: true})
    .then(() => {console.log("Banco de dados sincronizado com sucesso")})
    .catch(err => console.error("Erro ao sincronizar banco de dados", err))

export default app
