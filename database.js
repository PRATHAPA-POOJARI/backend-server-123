const mongoose = require('mongoose'); // Added quotes around 'mongoose'
const database = async () => {
    try {
        await mongoose.connect("mongodb+srv://prathappoojari408:8495@cluster0.bvc5cg7.mongodb.net/?retryWrites=true&w=majority&appName=AtlasApp", {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
        console.log('Database connected...');
    } catch (error) {
        console.error(error);
    }
}

module.exports = database;
