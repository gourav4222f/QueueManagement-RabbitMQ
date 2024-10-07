const { UserService } = require("../services")



async function createUserController(req, res) {
    try {       

        const newdata = {
            Password :req.body.Password,
            FirstName:req.body.FirstName,
            LastName:req.body.LastName,
            DateOfBirth:req.body.DateOfBirth,
            Email:req.body.Email,

        }        
        const data = await UserService.createUser(newdata)
        
        return res.status(201).json({
            success: true,
            message: 'User created successfully',
            data: data,
        });


    } catch (error) {
        console.log(error)
        throw error;
    }
}
async function destroyUserController(req, res) {
    try {

    } catch (error) {
        console.log(error)
        throw error;
    }
}
async function getUserController(req, res) {
    try {

    } catch (error) {
        console.log(error)
        throw error;
    }
}
async function getAllUserController(req, res) {
    try {
        const result = await UserService.getAllUser()
        return res.status(201).json({
            success: true,
            message: 'User created successfully',
            data: result,
        });

    } catch (error) {
        console.log(error)
        throw error;
    }
}
async function updateUserController(req, res) {
    try {

    } catch (error) {
        console.log(error)
        throw error;
    }
}


module.exports = {
    createUserController,
    destroyUserController,
    getUserController,
    getAllUserController,
    updateUserController
}