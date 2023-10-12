
import { DataTypes } from "sequelize"
import sequelize from '../config/database.js'

const Product = sequelize.define('product', {
    product_id: {
        type: DataTypes.STRING(10),
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    name: {
        type: DataTypes.STRING
    }
})




export default Product