import { DataTypes } from "sequelize"
import sequelize from '../config/database.js'
import User from "./user.js"
import OrderParticipant from "./order_participant.js"

const Participation = sequelize.define('Participation', {
    ID_PARTICIPATION: {
        type: DataTypes.INTEGER, 
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    FK_ID_USER: {
        type: DataTypes.INTEGER
    },
    FK_ID_ORDER_PARTICIPANT: {
        type: DataTypes.INTEGER
    },
}, {
    tableName: 'PARTICIPATION'
})

Participation.belongsTo(User, {
    foreignKey: 'FK_ID_USER',
})

Participation.belongsTo(OrderParticipant, {
    foreignKey: 'FK_ID_ORDER_PARTICIPANT',
})

export default Participation