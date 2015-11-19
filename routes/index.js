var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Cagers' });
});

/* GET Hello World page. */
router.get('/philosophy', function(req, res) {
    res.render('cagers/philosophy', { title: 'Philosophy & Goals' });
});
/* GET Hello World page. */
router.get('/camps', function(req, res) {
    res.render('cagers/camps', { title: 'Basketball Camps' });
});
/* GET Hello World page. */
router.get('/coachingclinics', function(req, res) {
    res.render('cagers/coachingclinics', { title: 'Coaching Clinics' });
});
/* GET Hello World page. */
router.get('/contact', function(req, res) {
    res.render('cagers/contact', { title: 'Contact Us' });
});
/* GET Hello World page. */
router.get('/development', function(req, res) {
    res.render('cagers/development', { title: 'Skill Development' });
});
/* GET Hello World page. */
router.get('/programdirector', function(req, res) {
    res.render('cagers/programdirector', { title: 'Program Director' });
});
/* GET Hello World page. */
router.get('/strengthshoe', function(req, res) {
    res.render('cagers/strengthshoe', { title: 'Strength Shoe Training' });
});
/* GET Hello World page. */
router.get('/teams', function(req, res) {
    res.render('cagers/teams', { title: 'Select Teams' });
});

module.exports = router;
