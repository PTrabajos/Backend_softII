import { DataTypes } from "sequelize"
import sequelize from '../config/database.js'

const Measure = sequelize.define('Measure', {
    idMeasure: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    name: {
        type: DataTypes.STRING(50)
    }
}, {
    tableName: 'MEASURE'
})

export default Measure