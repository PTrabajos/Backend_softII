
import { DataTypes } from "sequelize"
import sequelize from '../config/database.js'

const Product = sequelize.define('product', {
    product_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    name: {
        type: DataTypes.STRING
    }
    ,
    image: {
        type: DataTypes.TEXT
    }
})




export default Product