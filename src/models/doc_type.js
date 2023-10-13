
import { DataTypes } from "sequelize"
import sequelize from '../config/database.js'

const Doc = sequelize.define('doc', {
    doc_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    name: {
        type: DataTypes.STRING
    }
})




export default Doc