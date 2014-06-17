$(document).ready(function() {

loadImages();    
                
                
});
                  
function loadImages()
    {
        console.log("loading images");
                   
    $.getJSON( "http://fileuploader.sojoodi.com/files.json", function( feed ) {
            
            // Create an empty array to store images
            var thumbs = [];
 
            // Loop through the items
            for(var i=0, l=feed.length; i < l && i < 6;   i) 
            { 
                var src = feed[i];
                
                var img = "<img src='http://fileuploader.sojoodi.com/" + src;
                
                console.log(src);
                console.log(img);
                
                thumbs.push(img);
            
            }
            
            $('.preview').html(thumbs.join(''));
        }); 
            
    }  