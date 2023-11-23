import { DataTypes } from "sequelize"
import sequelize from '../config/database.js'

const Product = sequelize.define('Product', {
    idProduct: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    name: {
        type: DataTypes.STRING
    },
    description: {
        type: DataTypes.STRING
    },
    image: {
        type: DataTypes.TEXT
    }
}, {
    tableName: 'PRODUCT'
})

export default Product