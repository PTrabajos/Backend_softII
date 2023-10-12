
import { DataTypes } from "sequelize"
import sequelize from '../config/database.js'

const Doc = sequelize.define('doc', {
    doc_id: {
        type: DataTypes.STRING(10),
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    name: {
        type: DataTypes.STRING
    }
})




export default doc