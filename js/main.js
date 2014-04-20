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
        
        
        var typingHeight = $(".typing").height();
        
        var $top = (windowHeight - typingHeight) /2;
        
        $(".typing").css("margin-top", $top);
        
        var headerHeight = $(".header").height();
        
        $top = (windowHeight - headerHeight) / 2;
        
        $(".header").css("margin-top", $top);
    }
    
});