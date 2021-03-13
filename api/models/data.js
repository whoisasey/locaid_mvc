const mongoose = require('mongoose');

const { Schema } = mongoose;

const dataSchema = new Schema({
        name: String,
        address: String,
        phone: String,
        website: String,
});
module.exports = mongoose.model('Data', dataSchema, 'data');
