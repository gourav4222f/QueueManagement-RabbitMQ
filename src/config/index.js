const dotenv = require('dotenv');

dotenv.config();

module.exports = {
    PORT: process.env.PORT || 3000,
    saltRounds: parseInt(process.env.saltRounds),
};
