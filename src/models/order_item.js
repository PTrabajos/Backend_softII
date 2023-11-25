import { DataTypes } from "sequelize"
import sequelize from '../config/database.js'
import Order from "./order.js"
import Product from "./product.js"
import Measure from "./measure.js"

const OrderItem = sequelize.define('OrderItem', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    idOrder: {
        type: DataTypes.INTEGER
    },
    idProduct: {
        type: DataTypes.INTEGER
    },
    ammount: {
        type: DataTypes.DOUBLE
    },
    idMeasure: {
        type: DataTypes.INTEGER
    },
    price: {
        type: DataTypes.DOUBLE
    },
}, {
    tableName: 'ORDER_ITEM'
})

OrderItem.belongsTo(Order, {
    foreignKey: 'idOrder',
    targetId: 'id'
})

OrderItem.belongsTo(Product, {
    foreignKey: 'idProduct',
    targetId: 'id'
})

OrderItem.belongsTo(Measure, {
    foreignKey: 'idMeasure',
    targetId: 'id'
})

export default OrderItem