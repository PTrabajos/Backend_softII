import { DataTypes } from "sequelize"
import sequelize from '../config/database.js'
import DocType from "./doc_type.js"

const User = sequelize.define('User', {
    idUser: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    firstName: {
        type: DataTypes.STRING
    }
    ,
    lastName: {
        type: DataTypes.STRING
    }
    ,
    idDocType: {
        type: DataTypes.INTEGER
    }
    ,
    noDoc: {
        type: DataTypes.STRING
    },
    telephone: {
        type: DataTypes.STRING
    },
    email: {
        type: DataTypes.STRING
    }
    ,
    password: {
        type: DataTypes.STRING
    }
    ,
    profileImage: {
        type: DataTypes.TEXT
    }
}, {
    tableName: 'USER'
})

User.belongsTo(DocType, {
    foreignKey: 'idDocType',
})

export default User