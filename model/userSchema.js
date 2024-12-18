import { DataTypes } from "sequelize";

export const createUserSchema = async (sequelize) => {
    const User = sequelize.define('person', { 
        fullname: {
          type: DataTypes.STRING,
          allowNull: false
        },
        personid: {
          type: DataTypes.INTEGER,
          allowNull: false,
          unique: true
        },
        // Other model options go here
      });
      return User;
}