// en lugar de profesión se colocaría "Estudiante de"+{carrera} respecto al ID

/*{id: 10,nombreCompleto: "Jose Manuel MeLtran",DOC_ID:"72614003",
    imagen: "C:\Users\piero\OneDrive\Escritorio\HTML\TRABAJO DE CURSO\solucion\src\app\Images\image_4.png",
    dia: "01/24/2023",
    carrera:"Ingeneria de Sistemas",
    curso: "Programación Web",
  }*/
  import { DataTypes } from "sequelize"
  import sequelize from '../config/database.js'
  import User from "./user.js"
  import Payment_detail from "./payment_detail.js"

  const Order_detail = sequelize.define('order_detail', {
      ordetail_id: {
          type: DataTypes.STRING(10), // 10 caracteres (maximo
          primaryKey: true,
          autoIncrement: true,
          allowNull: false
      },
      user_id: {
          type: DataTypes.STRING(10)
      },
      payment_id: {
          type: DataTypes.STRING(10)
      },
      total: {
          type: DataTypes.FLOAT
      }
  })
  
  Order_detail.belongsTo(User, {
      foreignKey: 'user_id',
      targetId: 'id'
  })
  User.hasMany(Order_detail, {
      foreignKey: 'user_id',
      targetId: 'id'
  })
  Order_detail.belongsTo(Payment_detail, {
    foreignKey: 'payment_id',
    targetId: 'payment_id'
    })
    Payment_detail.hasMany(Order_detail, {
    foreignKey: 'payment_id',
    targetId: 'payment_id'
    })
  
  export default Order_detail