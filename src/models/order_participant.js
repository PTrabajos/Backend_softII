import { DataTypes } from "sequelize"
import sequelize from '../config/database.js'
import Order from "./order.js"
import User from "./user.js"
import Product from "./product.js"

const OrderParticipant = sequelize.define('OrderParticipant', {
    ID_ORDER_PARTICIPANT: {
        type: DataTypes.INTEGER, 
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    FK_ID_ORDER: {
        type: DataTypes.INTEGER
    },
    FK_ID_USER: {
        type: DataTypes.INTEGER
    },
    FK_ID_PRODUCT: {
        type: DataTypes.INTEGER
    },
    AMMOUNT: {
        type: DataTypes.FLOAT
    },
}, {
    tableName: 'ORDER_PARTICIPANT'
})

OrderParticipant.belongsTo(Order, {
    foreignKey: 'FK_ID_ORDER',
})

OrderParticipant.belongsTo(User, {
    foreignKey: 'FK_ID_USER',
})

OrderParticipant.belongsTo(Product, {
    foreignKey: 'FK_ID_PRODUCT',
})

export default OrderParticipant