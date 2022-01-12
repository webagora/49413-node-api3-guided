const Hub = require('./hubs-model')

async function checkHubId(req, res, next) {
  try {
    const possibleHub = await Hub.findById(req.params.id)
    if (possibleHub) {
      next()
    } else {
      // send an error to the err handling middleware in server.js
      next({ status: 404, message: `No Hub ${req.params.id}` })
    }
  } catch (err) {
    next(err)
  }
}

module.exports = {
  checkHubId,
}
