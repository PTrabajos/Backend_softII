  import { DATE, DataTypes } from "sequelize"
  import sequelize from '../config/database.js'
  import User from "./user.js"
  
  const User_login= sequelize.define('user_login', {
      ulogin_id: {
          type: DataTypes.INTEGER, // 10 caracteres (maximo
          primaryKey: true,
          autoIncrement: true,
          allowNull: false
      },
      user_id: {
          type: DataTypes.INTEGER
      },
      username: {
          type: DataTypes.STRING(35)
      },
      password: {
          type: DataTypes.STRING(25)
      }
      
      
  })
  
  
  User_login.belongsTo(User, {
      foreignKey: 'user_id',
      targetId: 'id'
  })
  
  User.hasMany(User_login, {
      foreignKey: 'user_id',
      targetId: 'id'
  })
  
  export default User_login