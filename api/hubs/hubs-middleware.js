function checkHubId(req, res, next) { 
    //  the req flows through
    //  hit the db with req.params.id
    //  make sure the id is "real"
    //  if it is, next()
    //  if it desn't, next('data no exist!')
    console.log('checking hub id!')
    next()

}



module.exports = {
    checkHubId,
  }