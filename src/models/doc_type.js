import { DataTypes } from "sequelize"
import sequelize from '../config/database.js'

const DocType = sequelize.define('DocType', {
    idDocType: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    name: {
        type: DataTypes.STRING
    }
}, {
    tableName: 'DOC_TYPE'
})

export default DocType