// en lugar de profesión se colocaría "Estudiante de"+{carrera} respecto al ID

/*{id: 10,nombreCompleto: "Jose Manuel MeLtran",DOC_ID:"72614003",
    imagen: "C:\Users\piero\OneDrive\Escritorio\HTML\TRABAJO DE CURSO\solucion\src\app\Images\image_4.png",
    dia: "01/24/2023",
    carrera:"Ingeneria de Sistemas",
    curso: "Programación Web",
  }*/
import { DATE, DataTypes } from "sequelize"
import sequelize from '../config/database.js'
import Carrera from "./carrera.js"

const Curso = sequelize.define('cursos', {
    idCurso: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    nombreCurso: {
        type: DataTypes.STRING
    }
    ,
    idUniversidad: {
        type: DataTypes.INTEGER
    }

})

Curso.belongsTo(Carrera, {
    foreignKey: 'idUniversidad',
    targetId: 'id'
})

Carrera.hasMany(Curso, {
    foreignKey: 'idUniversidad',
    targetId: 'id'
})

export default Curso