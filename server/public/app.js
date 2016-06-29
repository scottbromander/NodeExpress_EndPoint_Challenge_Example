$(document).ready(function(){
    var string = "";
    $.ajax({
        type: "GET",
        url: "/the",
        success: function(response){
            string += response;
        }
    });
    string += " ";
    brown(string);
});

function quick(string){
    $.ajax({
        type: "GET",
        url: "/adjectives/quick",
        success: function(response){
            string += response;
            brown(string);
        }
    });
}

function brown(string){
    $.ajax({
        type: "GET",
        url: "/adjectives/brown",
        success: function(response){
            string += " " + response;
            fox(string);
        }
    });
}

function fox(string){
    var url = "/animal/Fox";

    $.ajax({
        type: "GET",
        url: url,
        success: function(response){
            string += " " + response;
            showResult(string);
        }
    });
}

function showResult(string){
    $("#result").text(string.toUpperCase());
}