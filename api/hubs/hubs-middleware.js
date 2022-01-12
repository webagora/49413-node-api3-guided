const Hub = require('./hubs-model')

async function checkHubId(req, res, next) {
  try {
    const possibleHub = await Hub.findById(req.params.id)
    if (possibleHub) {
      // we already have the hub
      req.hub = possibleHub
      next()
    } else {
      // send an error to the err handling middleware in server.js
      next({ status: 404, message: `No Hub ${req.params.id}` })
    }
  } catch (err) {
    next(err)
  }
}

function validateHub(req, res, next) {
  console.log('what the heck!!!')
  next()
}

module.exports = {
  checkHubId,
  validateHub,
}
