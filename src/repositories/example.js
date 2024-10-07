
const { Example } = require('../models'); // Ensure this path points to your models directory
const CrudRepository = require('./crud-repository');

class ExampleRepository extends CrudRepository {
  constructor() {
    super(Example); // Pass the Example model to the CrudRepository constructor
  }
}

module.exports = ExampleRepository;
