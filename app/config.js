require('dotenv').config();

module.exports = {
    port: process.env.PORT || 8888,
    databaseURL: process.env.DATABASE,
    email: 'mojemail@kontakt.pl',
    sessionKeySecret: process.env.SESSION_KEY_SECRET
};
