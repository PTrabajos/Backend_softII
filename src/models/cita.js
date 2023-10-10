/*
{
    id: 1,
    nombreCompleto: "Juan Lopez",
    profesion: "Mg. Ingeniería de Sistemas",
    imagen: "../../../../../public/images/image1.png",
    dia: "01/24/2023",
    horarioInicio: "08:00 am",
    curso: "Programación Web",
    score: 0
  }
*/
import { DATE, DataTypes } from "sequelize"
import sequelize from '../config/database.js'
import Persona from "./persona.js"
import Curso from "./curso.js"

const Cita = sequelize.define('citas', {
    idCita: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    idRol: {
        type: DataTypes.INTEGER
    },
    Fecha: {
        type: DataTypes.DATE
    },
    HoraInicio:{
        type: DataTypes.DATE
    },
    Horafin:{
        type: DataTypes.DATE
    },
    enlaceSesion:{
        type: DataTypes.STRING
    },
    estado:{
        type: DataTypes.STRING
    },
    idCurso:{
        type: DataTypes.INTEGER
    }

})

Cita.belongsTo(Persona, {
    foreignKey: 'idRol',
    targetId: 'id'
})

Persona.hasMany(Cita, {
    foreignKey: 'idRol',
    targetId: 'id'
})


Cita.belongsTo(Curso, {
    foreignKey: 'idCurso',
    targetId: 'id'
})

Curso.hasMany(Cita, {
    foreignKey: 'idCurso',
    targetId: 'id'
})





export default Cita