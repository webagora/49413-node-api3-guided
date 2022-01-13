const Hub = require('./hubs-model')

async function checkHubId(req, res, next) { 
    //  the req flows through
    //  hit the db with req.params.id
    //  make sure the id is "real"
    //  if it is, next()
    //  if it desn't, next('data no exist!')
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
        next (err)
    }    
}

function validateHub(req, res, next) {
    // if the client doest not supply a name for the new hub
    // we want to respond with a 422 unprocessable entity
    // otherwise proceed to next middleware
    if (!req.body.name) {
        next({ status: 422, message: "Please provide a name" })
      } else {
        next()
      }
  }
  
  module.exports = {
    checkHubId,
    validateHub,
  }

