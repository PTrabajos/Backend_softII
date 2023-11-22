import { DataTypes } from "sequelize"
import sequelize from '../config/database.js'

const DocType = sequelize.define('DocType', {
    ID_DOC_TYPE: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    NAME: {
        type: DataTypes.STRING
    }
}, {
    tableName: 'DOC_TYPE'
})

export default DocType