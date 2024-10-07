const ProductRepository = require("../repositories/Product-repository")


/**
 * This createProduct function will create the product using the product repository
 * @param {*} data The data is an object which will get created in the database
 * @returns This function will return the created product if successful, otherwise an error
 */

async function createProduct(data) {
    try {
        const product = await ProductRepository.create(data);
        return product;
    } catch (error) {
        console.error(error);
        throw error;
    }
}

/**
 * This getProduct function will retrieve the data using the id 
 * @param {*} id The id used to retrieve the data
 * @returns This function will return the data if successful, otherwise an error
 */
async function getProduct(id) {
    try {
        const product = await ProductRepository.get(id)        
        return product
    } catch (error) {
        console.error(error);
        throw error;        
    }   
}

/**
 * This getProducts function will retrieve all data from the table
 * @returns This function will return an array of data if successful, otherwise an error
 */

async function getProducts() {
    try {
        const products = await ProductRepository.getAll()        
        return products;
    } catch (error) {
        console.error(error);
        throw error;                
    }   
}

/**
 * This destroyProduct function will destroy the data from the table by id 
 * @param {*} id The id used to find the data to destroy
 * @returns This function will return true if successful, otherwise an error/false
 */
async function destroyProduct(id){
    try {
        console.log(`i m deleteing ${id} from the model`)            
        const result = await ProductRepository.destroy(id)
        return result;
    } catch (error) {
        console.log(error)        
        throw error;
    }    
}

/**
 * This updateProduct function updates the data of the product using the id.
 * @param {*} id The id used to find the data.
 * @param {*} data The data used to update from the last data.
 * @returns It returns the updated data.
 */
async function updateProduct(id, data) {
    try {
        const updatedProduct = await ProductRepository.update(id, data);        
        return updatedProduct;
    } catch (error) {
        console.error(error);
        throw error;
    }
}

module.exports = {
    createProduct,
    updateProduct,
    getProduct,
    getProducts,
    destroyProduct,
};

