const express = require('express');
const router = express.Router();


router.get('/', function (req, res) {
  res.render('index',{subHeader:false});
})
router.get('/expPage', function (req, res) {
  res.render('experience',{subHeader:true});
})
router.get('/campPage', function (req, res) {
  res.render('camp',{subHeader:true});
})





module.exports = router;