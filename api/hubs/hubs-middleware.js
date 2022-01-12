const Hub = require('./hubs-model')

async function checkHubId(req, res, next) {
  // the req flows through
  // hit the db with req.params.id
  // make sure the id is "real"
  // if it is, next()
  // if it doesn't, next('dat no exist!)
  try {
    const possibleHub = await Hub.findById(req.params.id)
    if (possibleHub) {
      // ? good
    } else {
      // ? bad
      next({ status: 404, message: ``})
    }
  } catch (err) {
    next(err)
  }
}

module.exports = {
  checkHubId,
}
