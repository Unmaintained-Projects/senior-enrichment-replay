const express = require('express')
const apiRouter = express.Router()
const Aircraft = require('../db/models/aircraft')
const Country = require('../db/models/country')

// populate with name of country, but excluding the description
apiRouter.get('/', (req, res, next) => {
  Aircraft.findAll({include: [Country]})
  .then(aircrafts => res.json(aircrafts))
  .catch(next);
});

// by aircraftId, populated with only the name of the country that owns the aircraft
// include... where: {} ???
apiRouter.get('/:aircraftId', (req, res, next) => {
  Aircraft.findById(req.params.aircraftId, {include: [Country]})
  .then(foundAircraft => {
    res.json(foundAircraft)
  })
  .catch(next);
});

apiRouter.post('/', (req, res, next) => {
  Aircraft.create(req.body)
  .then(newAircraft => {
    res.json(newAircraft)
  })
  .catch(next);
});

apiRouter.put('/:aircraftId', (req, res, next) => {
  Aircraft.findById(req.params.aircraftId)
  .then(foundAircraft => {
    return foundAircraft.update(req.body)
  })
  .then(updatedAircraft => {
    res.json(updatedAircraft)
  })
  .catch(next);
});

apiRouter.delete('/:aircraftId', (req, res, next) => {
  Aircraft.findById(req.params.aircraftId)
  .then(foundAircraft => {
    foundAircraft.destroy()
  })
  // send message confirming deleted?
  .catch(next);
})

module.exports = apiRouter;
