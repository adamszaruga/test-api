var express = require('express');
var router = express.Router();

var counter = 0;


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json({
  	counter: counter
  })
});

router.post('/add', function(req, res, next) {
	counter++;
	res.json({
		counter: counter
	});
});

router.post('/subtract', function(req, res, next){
	if (counter == 0) {
		res.status(400).json({
			error: "Counter is already at 0!"
		});
	} else {
		counter--;
		res.json({
			counter: counter
		})
	}
});

module.exports = router;
