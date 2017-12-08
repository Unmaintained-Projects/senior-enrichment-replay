const Aircraft = require('./aircraft');
const Country = require('./country');

Aircraft.belongsTo(Country);
Country.hasMany(Aircraft, {
	onDelete: 'cascade'
});

module.exports = {
	Aircraft,
	Country
};
