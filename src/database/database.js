const mongoose = require('mongoose');
mongoose.set('strictQuery', true);
const constants = require('../app/constants')
const Uri = process.env.DATABASE_URI

function database() {
    mongoose
    .connect(Uri, { 
        dbName: "hotel-management",
        useNewUrlParser: true, 
        useUnifiedTopology: true 
    })
    .then(() => {
        console.log(`${constants.MESSAGES.CONNECTED}: Connected to mongoose database!`);
    })
    .catch((err) => {
        console.error(`${constants.MESSAGES.ERROR}: ${err}`);
    })
}

module.exports = database