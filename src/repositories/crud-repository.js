const { where } = require("sequelize");

class CrudRepository {
    /*    
    * This constructor will receive the model when it is extended with other repositories to obtain the basic CRUD functionality from this CrudRepository class.
    */
    constructor(model) {
        this.model = model;
    }    
   /**
    * Creates a new record in the database.
    * @param {*} data The data to be stored in the database.
    * @returns The created data.
    */
    async create(data) {
        try {
            const result = await this.model.create(data);
            return result;
        } catch (error) {
            console.log("Something went wrong in the repository layer");
            throw error;
        }
    }
   /**
    * This is a CRUD function to destroy/delete data in the database.
    * It takes the id of the data as a parameter.
    * @param {*} modelId 
    * @returns This function returns a boolean value indicating the success of the operation.
    */
    async destroy(modelId) {
        try {
            console.log(`i m deleteing ${modelId} from the model ${this.model}`)            
            await this.model.destroy({
                where: {
                    id: modelId
                }
            });
            return true;
        } catch (error) {
            console.log("Something went wrong in the repository layer");
            throw error;
        }
    }

    /**
     * This is a CRUD function to retrieve data from the database by id.     
     * Its parameter is the id of the data.
     * @param {*} modelId 
     * @returns This function will return the data.
     */

    async get(modelId) {
        try {
            const result = await this.model.findByPk(modelId);
            return result;
        } catch (error) {
            console.log("Something went wrong in the repository layer");
            throw error;
        }
    }

    /**
     * Retrieves all data of the model.
     * @returns An array of all data in the model.
     */
    async getAll(data={}) {
        try {
            console.log(data)

            const results = await this.model.findAll(data);
            return results;
        } catch (error) {
            console.log("Something went wrong in the repository layer");
            throw error;
        }
    }

    /**
     * Updates the data in the database.
     * @param {*} modelId The ID of the data to update.
     * @param {*} data The data to update.
     * @returns The updated data.
     */

    async update(modelId, data) {
        try {
            const result = await this.model.update(data, {
                where: {
                    id: modelId
                }
            });
            return result;
        } catch (error) {
            console.error("Something went wrong in the repository layer", error);
            throw error;
        }
    }
}

module.exports = CrudRepository