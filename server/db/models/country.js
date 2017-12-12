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
    type: Sequelize.INTEGER,
    get: function (value) {
      this.setDataValue('GFI', '$' + value + ',000,000')
    }
  },
  flagUrl: {
    type: Sequelize.STRING,
    defaultValue: 'https://i.redd.it/npe1l9nwmw6y.png'
  }
});

module.exports = Country;
