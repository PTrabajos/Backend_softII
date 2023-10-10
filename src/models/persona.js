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

const Persona = sequelize.define('personas', {
    idPersona: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    nombre: {
        type: DataTypes.STRING
    },
    apellido: {
        type: DataTypes.STRING
    },
    TipoDocumento:{
        type: DataTypes.STRING
    },
    dni:{
        type: DataTypes.INTEGER
    },
    idRol:{
        type: DataTypes.INTEGER
    },
    email:{
        type: DataTypes.STRING
    },
    contraseña:{
        type: DataTypes.INTEGER
    },
    idCarrera:{
        type: DataTypes.INTEGER
        },
    tituloPresentacion:{type: DataTypes.STRING},
    Presentacion:{type: DataTypes.STRING},
    grado:{type: DataTypes.STRING},

})

Persona.belongsTo(Carrera, {
    foreignKey: 'idCarrera',
    targetId: 'id'
})

Carrera.hasMany(Persona, {
    foreignKey: 'idCarrera',
    targetId: 'id'
})


Persona.belongsTo(Rol, {
    foreignKey: 'idRol',
    targetId: 'id'
})

Rol.hasMany(Persona, {
    foreignKey: 'idRol',
    targetId: 'id'
})





export default Persona