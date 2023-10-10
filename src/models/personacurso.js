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
import Carrera from "./carrera.js"
import Rol from "./rol.js"
import Curso from "./curso.js"

const PersonaCurso = sequelize.define('PersonasCursos', {
    idPersonaCurso: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    
    idPersona:{
        type: DataTypes.INTEGER
    },
    idCurso:{
        type: DataTypes.INTEGER
        }

})

PersonaCurso.belongsTo(Persona, {
    foreignKey: 'idPersona',
    targetId: 'id'
})

Persona.hasMany(PersonaCurso, {
    foreignKey: 'idPersona',
    targetId: 'id'
})


PersonaCurso.belongsTo(Curso, {
    foreignKey: 'idCurso',
    targetId: 'id'
})

Curso.hasMany(PersonaCurso, {
    foreignKey: 'idCurso',
    targetId: 'id'
})





export default PersonaCurso