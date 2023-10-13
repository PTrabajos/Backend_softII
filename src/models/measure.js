
import { DataTypes } from "sequelize"
import sequelize from '../config/database.js'

const Measure = sequelize.define('measure', {
    measure_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    name: {
        type: DataTypes.STRING(50)
    }
})




export default Measure