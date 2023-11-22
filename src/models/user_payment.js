import { DataTypes } from "sequelize"
import sequelize from '../config/database.js'
import User from "./user.js"

const UserPayment = sequelize.define('UserPayment', {
    ID_USER_PAYMENT: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    FK_ID_USER: {
        type: DataTypes.INTEGER
    },
    PAYMENT_TYPE: {
        type: DataTypes.STRING 
    },
    PROVIDER: {
        type: DataTypes.STRING
    },
    NU_ACCOUNT: {
        type: DataTypes.INTEGER
    },
    DATE_EXPIRY:{
        type: DataTypes.DATE
    }

}, {
    tableName: 'USER_PAYMENT'
})

UserPayment.belongsTo(User, {
    foreignKey: 'FK_ID_USER',
    targetId: 'ID_USER'
})

export default UserPayment