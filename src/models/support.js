import { DataTypes } from "sequelize"
import sequelize from '../config/database.js'
import ProblemType from "./problem_type.js"

const Support = sequelize.define('Support', {
    ID_SUPPORT: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    FIRST_NAME: {
        type: DataTypes.STRING
    }
    ,
    LAST_NAME: {
        type: DataTypes.STRING
    }
    ,
    FK_ID_PROBLEM_TYPE: {
        type: DataTypes.INTEGER
    }
    ,
    DESCRIPTION: {
        type: DataTypes.STRING
    },
    FG_PRESENTIAL: {
        type: DataTypes.STRING
    },
}, {
    tableName: 'SUPPORT'
})

Support.belongsTo(ProblemType, {
    foreignKey: 'FK_ID_PROBLEM_TYPE',
})

export default Support