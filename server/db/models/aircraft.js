const db = require('../_db');
const Sequelize = require('sequelize');

const Aircraft = db.define('aircraft', {
  make: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  model: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  year: {
    type: Sequelize.INTEGER,
    validate: {
      min: 1904
    }
  },
  type: {
    type: Sequelize.ENUM,
    values: ['Attack', 'Bomber', 'Versatile', 'Transport', 'Reconoissance', 'Rescue']
  },
  cost: {
    type: Sequelize.DECIMAL
  },
  imageUrl: {
    type: Sequelize.STRING,
    validate: {
      notEmpty: true,
      isUrl: true
    }
  },
  description: {
    type: Sequelize.TEXT
  }
});

Aircraft.getAircraftByType = (inputType) => {
  Aircraft.findAll({
    where: {
      type: inputType
    }
  })
  .then(aircrafts => {
    return aircrafts
  })
};

module.exports = Aircraft;
