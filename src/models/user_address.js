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

const User_address = sequelize.define('user_address', {
    uaddress_id: {
        type: DataTypes.INTEGER, // 10 caracteres (maximo
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    user_id: {
        type: DataTypes.INTEGER
    },
    adrress: {
        type: DataTypes.STRING(35)
    },
    city: {
        type: DataTypes.STRING(25)
    },
    postal_code: {
        type: DataTypes.STRING(15)
    },
    country: {
        type: DataTypes.STRING(20)
    }
})


User_address.belongsTo(User, {
    foreignKey: 'user_id',
    targetId: 'id'
})

User.hasMany(User_address, {
    foreignKey: 'user_id',
    targetId: 'id'
})

export default User_address