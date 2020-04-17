function createElements(){
  $("body").prepend("<div class=\"header\"><ul class=\"menu_bar\"><a href=\"../index.html\"><li>Home</li></a><a href=\"letteraturainglese.html\"><li>Letteratura Inglese</li></a><a href=\"linguainglese.html\"><li>Lingua Inglese</li></a></ul></div>");
  $("div.topic_list ul").addClass("close");
}

function setTopicToggles(){
  $("div.topic_list ul li:first-child").click(function(){
    $(this).parent().toggleClass("open");
    $(this).parent().toggleClass("close");
    if($(this).parent().hasClass("open")){
      $(this).children("img").attr("src",$(this).children("img").attr("src").substring(0,$(this).children("img").attr("src").length-5) + "1" + $(this).children("img").attr("src").substring($(this).children("img").attr("src").length-4,$(this).children("img").attr("src").length));
    } else {
      $(this).children("img").attr("src",$(this).children("img").attr("src").substring(0,$(this).children("img").attr("src").length-5) + "0" + $(this).children("img").attr("src").substring($(this).children("img").attr("src").length-4,$(this).children("img").attr("src").length));
    }
    console.log($(this).children("img").attr("src"));
  });
}

$(document).ready(function(){
  setTopicToggles();
  createElements();
});
