const { emailService } = require("../services")

async function create(req, res) {
    try {

        console.log("#########################################")
        const data = {
            subject: req.body.subject,
            content: req.body.content,
            recipientEmail: req.body.recipientEmail
        }
        console.log(data)


        const res = await emailService.creatticket()
    } catch (error) {
        return res.status(500).json(error)
        throw error
    }
}

module.exports = {
    create,
}