
import { DataTypes } from "sequelize"
import sequelize from '../config/database.js'
import Doc from "./doc_type.js"

const User = sequelize.define('user', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    first_name: {
        type: DataTypes.STRING
    }
    ,
    last_name: {
        type: DataTypes.STRING
    }
    ,
    doc_id: {
        type: DataTypes.INTEGER
    }
    ,
    doc_no: {
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
})

User.belongsTo(Doc, {
    foreignKey: 'doc_id',
    targetId: 'doc_id'
})

Doc.hasMany(User, {
    foreignKey: 'doc_id',
    targetId: 'doc_id'
})



export default User