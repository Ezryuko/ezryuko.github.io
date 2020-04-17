function createElements(){
  $("body").prepend("<div class=\"header\"><ul class=\"menu_bar\"><a href=\"../index.html\"><li>Home</li></a><a href=\"programmazione.html\"><li>Programmazione</li></a><a href=\"gdr.html\"><li>GDR</li></a><a href=\"testpage.html\"><li>Test</li></a></ul></div>");
  $("div.topic_list ul").addClass("close");
  $("div.topic_list ul li:first-child").prepend("<i class=\"fas fa-chevron-right\"></i><i class=\"fas fa-chevron-down\"></i>");
}

function setTopicToggles(){
  $("div.topic_list ul li:first-child").click(function(){
    $(this).parent().toggleClass("open");
    $(this).parent().toggleClass("close");
  });
}

function cpc(){
  var result_path = 0, result_ded35 = 0;
  $("tr#cpc_row").children().each(function(){
    switch($(this).children().val()){
      case "7":
        result_path -= 4;
        break;
      case "8":
        result_path -= 2;
        break;
      case "9":
        result_path -= 1;
        result_ded35 += 1;
        break;
      case "10":
        result_ded35 += 2;
        break;
      case "11":
        result_path += 1;
        result_ded35 += 3;
        break;
      case "12":
        result_path += 2;
        result_ded35 += 4;
        break;
      case "13":
        result_path += 3;
        result_ded35 += 5;
        break;
      case "14":
        result_path += 5;
        result_ded35 += 6;
        break;
      case "15":
        result_path += 7;
        result_ded35 += 8;
        break;
      case "16":
        result_path += 10;
        result_ded35 += 10;
        break;
      case "17":
        result_path += 13;
        result_ded35 += 13;
        break;
      case "18":
        result_path += 17;
        result_ded35 += 16;
        break;
    }
    console.log($(this).children().val() + " | Path: " + result_path + " | D&D3.5: " + result_ded35);
  });
  $("td#cpc_result").text("Path: " + result_path + " | D&D3.5: " + result_ded35);
}

$(document).ready(function(){
  setTopicToggles();
  createElements();
});
