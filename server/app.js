var express = require("express");
var app = express();
var index = require("./routes/index");
var animal = require("./routes/animal");
var adjectives = require("./routes/adjectives");

app.set("port", (process.env.PORT || 5000));

app.use("/animal", animal);
app.use("/adjectives", adjectives);
app.use("/", index);


app.listen(app.get("port"), function(){
    console.log("Listening on port: " , app.get("port"));
});

module.exports = app;