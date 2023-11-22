import { DataTypes } from "sequelize"
import sequelize from '../config/database.js'

const Product = sequelize.define('Product', {
    ID_PRODUCT: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    NAME: {
        type: DataTypes.STRING
    },
    DESCRIPTION: {
        type: DataTypes.STRING
    },
    IMAGE: {
        type: DataTypes.TEXT
    }
}, {
    tableName: 'PRODUCT'
})

export default Product