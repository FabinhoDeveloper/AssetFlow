import { DataTypes } from "sequelize";
import Setor from "./Setor.js";
import sequelize from "../config/database.js";

const Item = sequelize.define("item", {
    idItem: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    },
    descricao: {
        type: DataTypes.STRING,
        allowNull: false
    },
    quantidade: {
        type: DataTypes.INTEGER,
        allowNull: false,
    }
})

Item.belongsTo(Setor, {foreignKey: "idSetor"})

export default Item
