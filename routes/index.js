var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Cagers' });
});

router.get('/article/:slug', function(req, res, next) {
  var db = req.db;
  var collection = db.get('articlecollection');
  collection.find({"slug":req.params.slug},{},function(e,docs){
      res.render('cagers/article', {
          "article" : docs,
          "title" : docs[0].title
      });
  });
});


module.exports = router;
