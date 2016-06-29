var express = require("express");
var router = express.Router();

router.get("/:value", function(req,res){
    if(req.params.value == "fox"){
        res.send("fox");
    } else {
        res.send("dog");
    }
});

module.exports = router;