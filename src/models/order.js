import { DataTypes } from "sequelize"
import sequelize from '../config/database.js'
import User from "./user.js"

const Order = sequelize.define('Order', {
    id: {
        type: DataTypes.INTEGER, 
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    idUser: {
        type: DataTypes.INTEGER
    },
    title: {
        type: DataTypes.STRING
    },
    description: {
        type: DataTypes.STRING
    },
    deliveryDate: {
        type: DataTypes.DATE
    },
    address: {
        type: DataTypes.STRING
    },
    fgState: {
        type: DataTypes.STRING
    }
}, {
    tableName: 'ORDER'
})

Order.belongsTo(User, {
    foreignKey: 'idUser',
})

export default Order