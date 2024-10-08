'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Notification extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Notification.init({
    subject:{
      type: DataTypes.STRING,
      allowNull:false
    },
    content:{
      type: DataTypes.STRING,
      allowNull:false
    },
    recipientEmail: {
      type: DataTypes.STRING,
      allowNull:false
    },
    status:{
      type: DataTypes.ENUM,
      values:["PANDING","DONE","FAIL"],
      defaultValue:"PANDING",
      allowNull:false
    },
  }, {
    sequelize,
    modelName: 'Notification',
  });
  return Notification;
};