import { DataTypes } from "sequelize"
import sequelize from '../config/database.js'
import User from "./user.js"

const Order = sequelize.define('Order', {
    ID_ORDER: {
        type: DataTypes.INTEGER, 
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    FK_ID_USER: {
        type: DataTypes.INTEGER
    },
    TITLE: {
        type: DataTypes.STRING
    },
    DESCRIPTION: {
        type: DataTypes.STRING
    },
    DELIVERY_DATE: {
        type: DataTypes.DATE
    },
    ADDRESS: {
        type: DataTypes.STRING
    },
    FG_STATE: {
        type: DataTypes.STRING
    }
}, {
    tableName: 'ORDER'
})

Order.belongsTo(User, {
    foreignKey: 'FK_ID_USER',
})

export default Order