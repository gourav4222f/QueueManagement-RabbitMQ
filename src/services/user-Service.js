const { UserRepository } = require("../repositories")
const user = new UserRepository()
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const { saltRounds } = require("../config");

const createUser = async (data) => {
    data.Password = await bcrypt.hash(data.Password, saltRounds);
    console.log(data.Password + " password after bcrypt")
    
    const isUser = await user.getAll({ where: { Email: data.Email } })

    if (isUser.length === 0) {
        try {
            const result = await user.create(data);
            // Generate JWT token
            const token = jwt.sign({ email: data.Email }, 'your_secret_key', { expiresIn: '1d' }); // Replace 'your_secret_key' with your actual secret key
            return { user: result, token }; // Return user data and token
        } catch (error) {
            console.error(error)
            throw error;
        }
    } else {
        return "User with the same email exists";
    }
}

const destroyUser = async (modelId) => {
    try {
        const result = await user.destroy(modelId)
        return result;
    } catch (error) {
        console.error(error)
        throw error;
    }
}

const getUser = async (modelId) => {
    try {
        const result = await user.get(modelId)
        return result;
    } catch (error) {
        console.error(error)
        throw error;
    }
}

const getAllUser = async () => {
    try {
        return await user.getAll();
    } catch (error) {
        console.error(error)
        throw error;
    }
}

const updateUser = async (modelId, data) => {
    try {
        const result = await user.update(modelId, data)
        return result;
    } catch (error) {
        console.error(error)
        throw error;
    }
}

module.exports = {
    createUser,
    destroyUser,
    getUser,
    getAllUser,
    updateUser
}