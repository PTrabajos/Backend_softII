import { DataTypes } from "sequelize"
import sequelize from '../config/database.js'
import ProblemType from "./problem_type.js"

const Support = sequelize.define('Support', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    firstName: {
        type: DataTypes.STRING
    }
    ,
    lastName: {
        type: DataTypes.STRING
    }
    ,
    idProblemType: {
        type: DataTypes.INTEGER
    }
    ,
    description: {
        type: DataTypes.STRING
    },
    fgPresential: {
        type: DataTypes.STRING
    },
}, {
    tableName: 'SUPPORT'
})

Support.belongsTo(ProblemType, {
    foreignKey: 'idProblemType',
})

export default Support