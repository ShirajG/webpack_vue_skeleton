module.exports = {
  index: function(req, res){
    res.render('home', {
      title: "Hello World",
      message: "This is awesome!"
    })
  }
}