// '/aircrafts'

apiRouter.get('/', (req, res, next) => {
  Aircraft.findAll()
  .then(aircrafts => res.json(aircrafts))
  .catch(next);
});

apiRouter.get('/:aircraftId', (req, res, next) => {
  Aircraft.findById(req.params.aircraftId)
  .then(foundAircraft => {
    res.json(aircraft)
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
    foundAircraft.update(req.body)
  })
  .then(updatedAircraft => {
    res.json(updatedAircraft)
  })
  .catch(next);
});

apiRouter.delete('/:aircraftId', (req, res, next) => {

})
