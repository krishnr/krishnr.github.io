$(document).ready(function() {
    
    $(window).load(function () {
        resizeMain();
    });
    
    $(window).resize(function () {
        resizeMain();
    });
    
    function resizeMain() {
        var windowHeight = $(window).height();
                
        $("#main-container").css("height", windowHeight);
        
        var headerHeight = $(".header").height();
        
        $top = (windowHeight - headerHeight) / 2;
        
        $(".header").css("margin-top", $top);
    }
    
});