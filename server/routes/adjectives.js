var express = require("express");
var router = express.Router();

router.get("/:value", function(req,res){
    if(req.params.value == "brown"){
        res.send("lazy");
    } else {
        res.send("brown");
    }
});

router.get("/quick", function(req,res){
    res.send("quick");
});

module.exports = router;