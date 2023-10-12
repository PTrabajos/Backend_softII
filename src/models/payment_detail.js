// en lugar de profesión se colocaría "Estudiante de"+{carrera} respecto al ID

/*{id: 10,nombreCompleto: "Jose Manuel MeLtran",DOC_ID:"72614003",
    imagen: "C:\Users\piero\OneDrive\Escritorio\HTML\TRABAJO DE CURSO\solucion\src\app\Images\image_4.png",
    dia: "01/24/2023",
    carrera:"Ingeneria de Sistemas",
    curso: "Programación Web",
  }*/
  import { DATE, DataTypes } from "sequelize"
  import sequelize from '../config/database.js'
  
  const Payment_detail = sequelize.define('payment_detail', {
      payment_id: {
          type: DataTypes.STRING(10), // 10 caracteres (maximo
          primaryKey: true,
          autoIncrement: true,
          allowNull: false
      },
      amount: {
          type: DataTypes.DOUBLE
      },
      provider: {
          type: DataTypes.STRING(35)
      },
      status: {
          type: DataTypes.STRING(25)
      }
  })
  
  
  
  
  export default Payment_detail