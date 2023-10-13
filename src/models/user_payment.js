// en lugar de profesión se colocaría "Estudiante de"+{carrera} respecto al ID

/*{id: 10,nombreCompleto: "Jose Manuel MeLtran",DOC_ID:"72614003",
    imagen: "C:\Users\piero\OneDrive\Escritorio\HTML\TRABAJO DE CURSO\solucion\src\app\Images\image_4.png",
    dia: "01/24/2023",
    carrera:"Ingeneria de Sistemas",
    curso: "Programación Web",
  }*/
import { DATE, DataTypes } from "sequelize"
import sequelize from '../config/database.js'
import User from "./user.js"

const User_payment = sequelize.define('user_payment', {
    userpay_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    user_id: {
        type: DataTypes.INTEGER
    },
    payment_type: {
        type: DataTypes.STRING 
    },
    provider: {
        type: DataTypes.STRING
    },
    account_no: {
        type: DataTypes.INTEGER
    },
    expiry:{
        type: DataTypes.DATE
    }

})

User_payment.belongsTo(User, {
    foreignKey: 'user_id',
    targetId: 'id'
})

User.hasMany(User_payment, {
    foreignKey: 'user_id',
    targetId: 'id'
})

export default User_payment