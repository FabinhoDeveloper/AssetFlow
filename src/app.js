import express from "express"
import { config } from "dotenv"

// Import dos controllers

const app = express() // Instancia do express
config() // Variáveis de ambiente

// Rota padrão da API
app.get("/", (req, res) => {
    res.json({mensagem: "Olá, API!"})
})

// Rotas da API

app.use("/historico")
app.use("/item")
app.use("/setor")
app.use("/usuario")
app.use("/workspace")

export default app
