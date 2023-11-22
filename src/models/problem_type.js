import { DataTypes } from "sequelize"
import sequelize from '../config/database.js'

const ProblemType = sequelize.define('ProblemType', {
    ID_PROBLEM_TYPE: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    NAME: {
        type: DataTypes.STRING(50)
    }
}, {
    tableName: 'PROBLEM_TYPE'
})

export default ProblemType