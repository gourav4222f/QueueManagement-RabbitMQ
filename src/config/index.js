const dotenv = require('dotenv');

dotenv.config();


module.exports = {
    PORT: process.env.PORT || 3000,
    PASS: process.env.MAIL_PASS,
    MAIL: process.env.MAIL_EMAIL 
};
