const express = require('express')
const apiRouter = express.Router()
const Country = require('../db/models/country')
const Aircraft = require('../db/models/aircraft')

apiRouter.get('/', (req, res, next) => {
  Country.findAll({include: [Aircraft]})
  .then(countries => res.json(countries))
  .catch(next);
});

// excluding description of aircrafts
apiRouter.get('/:countryId', (req, res, next) => {
  Country.findById(req.params.countryId, {include: [Aircraft]})
  .then(foundCountry => {
    res.json(foundCountry)
  })
  .catch(next);
});

// top 5 countries: by GFI (0 is strongest, 10 weakest), sorted strongest to weakest
apiRouter.get('/topFive', (req, res, next) => {
  Country.getFive()
  .then(topFive => {
    //
  })
});


apiRouter.post('/', (req, res, next) => {
  Country.create(req.body)
  .then(newCountry => {
    res.json(newCountry)
  })
  .catch(next);
});

apiRouter.put('/:countryId', (req, res, next) => {
  Country.findById(req.params.countryId)
  .then(foundCountry => {
    return foundCountry.update(req.body)
  })
  .then(updatedCountry=> {
    res.json(updatedCountry)
  })
  .catch(next);
});

// delete all aircrafts associated with the country
apiRouter.delete('/:countryId', (req, res, next) => {
  Country.findById(req.params.countryId)
  .then(foundCountry => {
    foundCountry.destroy()
  })
  .catch(next);
})

module.exports = apiRouter;
