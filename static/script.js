$(document).ready(function() {
    const $thisDot = $('<div class="this-dot"><iframe width="850" height="500" src="https://www.youtube.com/embed/M5d7vygUPoQ?rel=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe></div>');
    $('p:last').after($thisDot);
});