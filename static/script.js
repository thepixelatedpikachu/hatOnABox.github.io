$(document).ready(() => {
    $("h1").hover(function() {
        $(this).css("text-decoration", "underline");
        }, function() {
            $(this).css("text-decoration", "none");
    });
    
    $("h2").hover(function() {
        $(this).css("text-decoration", "underline");
        }, function() {
            $(this).css("text-decoration", "none");
    });
    
    
    $("a").hover(function() {
        $(this).css("font-weight", "Bold");
        }, function(){
        $(this).css("font-weight", "Normal");
    });
    
    const $thisDot = $('<div class="this-dot"><iframe width="850" height="500" src="https://www.youtube.com/embed/M5d7vygUPoQ?rel=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe></div>');
    $('p:last').after($thisDot);
    
});