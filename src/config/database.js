import { Sequelize } from "sequelize";
import { config } from "dotenv";
config()

const dbName = process.env.DB_NAME
const username = process.env.DB_USERNAME
const password = process.env.DB_PASSWORD
const host = process.env.DB_HOST 

const sequelize = new Sequelize(dbName, username, password, {
    host: host,
    dialect: 'postgres'
})

export default sequelize
