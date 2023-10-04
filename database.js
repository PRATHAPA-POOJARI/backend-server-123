const mongoose = require('mongoose'); // Added quotes around 'mongoose'
const database = async () => {
    try {
        await mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
    console.log('Database connected...');
    } catch (error) {
        console.error(error);
    }
}

module.exports = database;
