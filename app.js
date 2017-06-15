var express = require("express");
var path = require("path");
var app = express();
var pagesFile = require('./config/pages.json');

app.set('newsFile', require('./config/news.json'));
app.set('categFile', require('./config/categ.json'));

app.set("views", path.resolve(__dirname, "views"));
app.set("view engine", "ejs");
app.set('port', (process.env.PORT || 5000));
app.use(express.static('public'))

app.use(require("./routes/root_router"));
app.use(require("./routes/news_router"));
app.use(require("./routes/categ_router"));

app.use(function(request, response) {
  response.statusCode = 404;
  response.render("404", {});
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
