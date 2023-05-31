$(document).ready(function () {
  $("#more").click(function () {
    $("html, body").animate(
      {
        scrollTop: $("#test").offset().top,
      },
      1000
    );
  });
});

/* Bara en simpel JS kod som gör en liten scroll down när du klickar på "more" knappen i Home.html*/
