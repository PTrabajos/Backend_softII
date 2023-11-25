import { DataTypes } from "sequelize"
import sequelize from '../config/database.js'
import OrderItem from "./order_item.js"
import User from "./user.js"
import Product from "./product.js"

const OrderParticipant = sequelize.define('OrderParticipant', {
    id: {
        type: DataTypes.INTEGER, 
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    idOrderItem: {
        type: DataTypes.INTEGER
    },
    idUser: {
        type: DataTypes.INTEGER
    },
    idProduct: {
        type: DataTypes.INTEGER
    },
    ammount: {
        type: DataTypes.FLOAT
    },
}, {
    tableName: 'ORDER_PARTICIPANT'
})

OrderParticipant.belongsTo(OrderItem, {
    foreignKey: 'idOrderItem',
})

OrderParticipant.belongsTo(User, {
    foreignKey: 'idUser',
})

OrderParticipant.belongsTo(Product, {
    foreignKey: 'idProduct',
})

export default OrderParticipant