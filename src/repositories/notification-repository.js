
const { where } = require('sequelize');
const notification = require('../models/'); // Ensure this path points to your models directory
const CrudRepository = require('./crud-repository');

class notificationRepository extends CrudRepository {
  constructor() {
    super(notification); // Pass the Example model to the CrudRepository constructor
  }

  async getpanding() {
    const res =await notification.findAll({
      where: {
        status: "PANDING"
      }
    })
  }
}


module.exports = new notificationRepository()
