const db = require('../_db');
const Sequelize = require('sequelize');

const Country = db.define('country', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  GFI: {
    type: Sequelize.INTEGER
  },
  flagUrl: {
    type: Sequelize.STRING,
    defaultValue: 'https://i.redd.it/npe1l9nwmw6y.png'
  }
});

Country.getTopFive = () => {
  // finds the top 5 strongest nations sorted by GFI (0 is strongest, 10 weakest)
  Country.findAll()
  .then(countries => {
    // sort top 5 countries by GFI (0-10)
  })
};

module.exports = Country;
