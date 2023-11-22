import { DataTypes } from "sequelize"
import sequelize from '../config/database.js'
import DocType from "./doc_type.js"

const User = sequelize.define('User', {
    ID_USER: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    FIRST_NAME: {
        type: DataTypes.STRING
    }
    ,
    LAST_NAME: {
        type: DataTypes.STRING
    }
    ,
    FK_ID_DOC_TYPE: {
        type: DataTypes.INTEGER
    }
    ,
    NO_DOC: {
        type: DataTypes.STRING
    },
    TELEPHONE: {
        type: DataTypes.STRING
    },
    EMAIL: {
        type: DataTypes.STRING
    }
    ,
    PASSWORD: {
        type: DataTypes.STRING
    }
    ,
    PROFILE_IMAGE: {
        type: DataTypes.TEXT
    }
}, {
    tableName: 'USER'
})

User.belongsTo(DocType, {
    foreignKey: 'FK_ID_DOC_TYPE',
})

export default User