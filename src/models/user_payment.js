import { DataTypes } from "sequelize"
import sequelize from '../config/database.js'
import User from "./user.js"

const UserPayment = sequelize.define('UserPayment', {
    idUserPayment: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    fkIdUser: {
        type: DataTypes.INTEGER
    },
    paymentType: {
        type: DataTypes.STRING 
    },
    provider: {
        type: DataTypes.STRING
    },
    nuAccount: {
        type: DataTypes.INTEGER
    },
    dateExpiry:{
        type: DataTypes.DATE
    }

}, {
    tableName: 'USER_PAYMENT'
})

UserPayment.belongsTo(User, {
    foreignKey: 'fkIdUser',
    targetId: 'idUser'
})

export default UserPayment