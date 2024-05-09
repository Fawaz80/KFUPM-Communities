const express = require("express");
const nunjucks = require("nunjucks");
const app = express();


app.use(express.static("public"));

// nunjucks.configure("views", {
//   express: app
// })
// app.set('view engine', 'njk');

// app.get("/", (req, res) => {
//   res.render("hello",{name:"Web Development"});
// });

app.listen(3000, function() {
    console.log("Listening on port 3000...");
 });