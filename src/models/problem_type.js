import { DataTypes } from "sequelize"
import sequelize from '../config/database.js'

const ProblemType = sequelize.define('ProblemType', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    name: {
        type: DataTypes.STRING(50)
    }
}, {
    tableName: 'PROBLEM_TYPE'
})

export default ProblemType