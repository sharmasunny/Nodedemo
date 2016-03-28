//home page route
module.exports.index = function(req, res, next) {
  res.render('index', { title: 'Express',abc:'hello' });
}


module.exports.hi = function(req, res, next) {
  res.json( {'hello': 'this is hi' });
}