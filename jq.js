var imageURLs = [
    "images/Scene1.webp"
  , "images/Scene2.webp"
  , "images/Scene3.webp"
  , "images/Scene5.webp"
  , "images/Scene6_glitch.webp"
  , "images/Scene7_website.webp"
];
function getImageTag() {
 
 var randomIndex = Math.floor(Math.random() * imageURLs.length);
 var img = imageURLs[randomIndex];
 return img;
}

$(function(){

    $('#Interface').prepend($('<img>',{id:'Computer',src:getImageTag()}));

    $("#LinksInterface").on("click", function() {
        $("#Interface").html($('<img>',{id:'Computer',src:getImageTag()}));
        $.get("home.html", function (data) {
            $("#Interface").append(data);
        });
        
    });

    $("#3dInterface").on("click", function() {
        $("#Interface").empty();
        $("#Interface").load("gear.html");
    });
  
  });