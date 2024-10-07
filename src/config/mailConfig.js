const nodemailer = require("nodemailer");
const { PASS, MAIL } = require('./index');

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: MAIL,
        pass: PASS,
    },        
});

module.exports = transporter