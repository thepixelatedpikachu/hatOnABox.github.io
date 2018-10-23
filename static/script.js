// load content when the document has loaded
$(function() {

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



});