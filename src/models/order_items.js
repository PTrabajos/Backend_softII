// en lugar de profesión se colocaría "Estudiante de"+{carrera} respecto al ID

/*{id: 10,nombreCompleto: "Jose Manuel MeLtran",DOC_ID:"72614003",
    imagen: "C:\Users\piero\OneDrive\Escritorio\HTML\TRABAJO DE CURSO\solucion\src\app\Images\image_4.png",
    dia: "01/24/2023",
    carrera:"Ingeneria de Sistemas",
    curso: "Programación Web",
  }*/
  import { DATE, DataTypes } from "sequelize"
  import sequelize from '../config/database.js'
  import order_detail from "./order_detail.js"
  import Product from "./product.js"
  import Measure from "./measure.js"

  const Order_items = sequelize.define('order_items', {
      oritems_id: {
          type: DataTypes.INTEGER, // 10 caracteres (maximo
          primaryKey: true,
          autoIncrement: true,
          allowNull: false
      },
      order_id: {
          type: DataTypes.INTEGER
      },
      product_id: {
          type: DataTypes.INTEGER
      },
      cuantity: {
          type: DataTypes.DOUBLE
      },
      measure_id: {
          type: DataTypes.INTEGER
      },
      price: {
        type: DataTypes.DOUBLE
      },
  })
  
  Order_items.belongsTo(order_detail, {
        foreignKey: 'order_id',
        targetId: 'ordetail_id'
    })
    order_detail.hasMany(Order_items, {
        foreignKey: 'order_id',
        targetId: 'ordetail_id'
    })
    Order_items.belongsTo(Product, {
        foreignKey: 'product_id',
        targetId: 'product_id'
    })  
    Product.hasMany(Order_items, {
        foreignKey: 'product_id',
        targetId: 'product_id'
    })
    
    Order_items.belongsTo(Measure, {
        foreignKey: 'measure_id',
        targetId: 'measure_id'
    })
    Measure.hasMany(Order_items, {
        foreignKey: 'measure_id',
        targetId: 'measure_id'
    })
  export default Order_items