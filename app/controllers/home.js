var controllers = {};

controllers.index = function(req, res){
  res.render('home',{
    title: "Hello World",
    message: "This is awesome!"
  });
};

module.exports = controllers;