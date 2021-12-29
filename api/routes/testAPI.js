var express = require('express')
var router = express.Router()

router.get('/', (req, res, next)=>{
  console.log("is working")
  res.send('API is working')
})

module.exports = router;