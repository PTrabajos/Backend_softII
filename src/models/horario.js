// en lugar de profesión se colocaría "Estudiante de"+{carrera} respecto al ID

/*{id: 10,nombreCompleto: "Jose Manuel MeLtran",DOC_ID:"72614003",
    imagen: "C:\Users\piero\OneDrive\Escritorio\HTML\TRABAJO DE CURSO\solucion\src\app\Images\image_4.png",
    dia: "01/24/2023",
    carrera:"Ingeneria de Sistemas",
    curso: "Programación Web",
  }*/
import { DATE, DataTypes } from "sequelize"
import sequelize from '../config/database.js'
import Persona from "./persona.js"

const Horario = sequelize.define('horarios', {
    idHorario: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    idPersona: {
        type: DataTypes.INTEGER
    },
    horaInicio: {
        type: DataTypes.DATE
    },
    diaDeLaSemana: {
        type: DataTypes.DATE
    },
    horafin: {
        type: DataTypes.DATE
    }

})

Horario.belongsTo(Persona, {
    foreignKey: 'idPersona',
    targetId: 'id'
})

Persona.hasMany(Horario, {
    foreignKey: 'idPersona',
    targetId: 'id'
})

export default Horario