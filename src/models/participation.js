import { DataTypes } from "sequelize"
import sequelize from '../config/database.js'
import User from "./user.js"
import OrderParticipant from "./order_participant.js"

const Participation = sequelize.define('Participation', {
    idParticipation: {
        type: DataTypes.INTEGER, 
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    idUser: {
        type: DataTypes.INTEGER
    },
    idOrderParticipant: {
        type: DataTypes.INTEGER
    },
}, {
    tableName: 'PARTICIPATION'
})

Participation.belongsTo(User, {
    foreignKey: 'idUser',
})

Participation.belongsTo(OrderParticipant, {
    foreignKey: 'idOrderParticipant',
})

export default Participation