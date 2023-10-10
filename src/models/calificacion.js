// en lugar de profesión se colocaría "Estudiante de"+{carrera} respecto al ID

/*{id: 10,nombreCompleto: "Jose Manuel MeLtran",DOC_ID:"72614003",
    imagen: "C:\Users\piero\OneDrive\Escritorio\HTML\TRABAJO DE CURSO\solucion\src\app\Images\image_4.png",
    dia: "01/24/2023",
    carrera:"Ingeneria de Sistemas",
    curso: "Programación Web",
  }*/
import { DATE, DataTypes } from "sequelize"
import sequelize from '../config/database.js'
import Cita from "./cita.js"

const Calificacion = sequelize.define('calificacion', {
    idCalificacion: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    idCita: {
        type: DataTypes.INTEGER
    },
    
    Calificacion: {
        type: DataTypes.INTEGER
    },
    
    comentario:{
        type: DataTypes.STRING
    }

})

Calificacion.belongsTo(Cita, {
    foreignKey: 'idUniversidad',
    targetId: 'id'
})

Cita.hasMany(Calificacion, {
    foreignKey: 'idUniversidad',
    targetId: 'id'
})

export default Calificacion