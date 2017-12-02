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
    // has a default value
    type: Sequelize.STRING
  }
  // can have many aircrafts assigned, may have none
});

Country.getTopFive = () => {
  // finds the top 5 strongest nations

  // sorted by GFI (0 is strongest, 10 weakest)
};

module.exports = Country;
