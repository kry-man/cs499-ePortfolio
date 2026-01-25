// Initialize controller for meals

const meals = async function (req, res) => {
     res.render('meals', { title: "Travlr Getaways"});
};

module.exports = {
    meals,
};