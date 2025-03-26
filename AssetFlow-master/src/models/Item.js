import { DataTypes } from "sequelize";
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
},{
    tableName: "item",
    timestamps: false
})

export default Item
