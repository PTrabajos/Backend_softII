import { DataTypes } from "sequelize"
import sequelize from '../config/database.js'
import Order from "./order.js"
import Product from "./product.js"
import Measure from "./measure.js"

const OrderItem = sequelize.define('OrderItem', {
    ID_ORDER_ITEM: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    FK_ID_ORDER: {
        type: DataTypes.INTEGER
    },
    FK_ID_PRODUCT: {
        type: DataTypes.INTEGER
    },
    AMMOUNT: {
        type: DataTypes.DOUBLE
    },
    FK_ID_MEASURE: {
        type: DataTypes.INTEGER
    },
    PRICE: {
        type: DataTypes.DOUBLE
    },
}, {
    tableName: 'ORDER_ITEM'
})

OrderItem.belongsTo(Order, {
    foreignKey: 'FK_ID_ORDER',
    targetId: 'ID_ORDER'
})

OrderItem.belongsTo(Product, {
    foreignKey: 'FK_ID_PRODUCT',
    targetId: 'ID_PRODUCT'
})

OrderItem.belongsTo(Measure, {
    foreignKey: 'FK_ID_MEASURE',
    targetId: 'ID_MEASURE'
})

export default OrderItem