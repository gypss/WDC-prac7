var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.get('/brew.html', function(req, res, next) {
  var d = req.query.drink;

  if (d == "coffee"){
    res.sendStatus(418);
  }
  if (d == "tea"){
    res.send('A delicious cup of tea!');
    }
  else{
    res.sendStatus(400);
  }

});

module.exports = router;
