// load content when the document has loaded
$(document).ready(() => {

    // when the user hovers over h1 tags underline them
    $("h1").hover(function() {
        $(this).css("text-decoration", "underline");
        }, function() {
            $(this).css("text-decoration", "none");
    });

    // when the user hovers over h2 tags underline thme
    $("h2").hover(function() {
        $(this).css("text-decoration", "underline");
        }, function() {
            $(this).css("text-decoration", "none");
    });

    // when the user hovers over a tags make the text bold
    $("a").hover(function() {
        $(this).css("font-weight", "Bold");
        }, function(){
        $(this).css("font-weight", "Normal");
    });

    // append the this dot video to the document
    const $thisDot = $('<div class="this-dot"><iframe width="850" height="500" src="https://www.youtube.com/embed/M5d7vygUPoQ?rel=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe></div>');
    $('p:last').after($thisDot);

});