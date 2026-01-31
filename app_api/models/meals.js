const mongoose = require('mongoose');

// Define the meals schema
const mealsSchema = new mongoose.Schema({
    name: { type: String, required: true, index: true },
    image: { type: String, required: true },
    alt_name: { type: String, required: true },
    description: { type: String, required: true }
});

const Meals = mongoose.model('meals', mealsSchema);
module.exports = Meals;