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
    type: Sequelize.ENUM('Attack', 'Bomber', 'Versatile', 'Transport', 'Reconoissance', 'Rescue')
  },
  cost: {
    type: Sequelize.DECIMAL
    // decimal stored in millions
    // e.g. $1 million would be 1 in db
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

Aircraft.changeCost = (inputCost) => {
  // hook?
};

module.exports = Aircraft;
