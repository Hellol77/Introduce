var Body = {
  SetColor: function (color) {
    //   document.querySelector("body").style.color = color;
	$('body').css('color',color);
  },
  SetBackgroundColor: function (color) {
    // document.querySelector("body").style.backgroundColor = color;
	$('body').css('backgroundColor',color);
  },
};
var Links = {
  SetColor: function (color) {
    //   var alist = document.querySelectorAll("a");
    //   var i = 0;
    //   while (i < alist.length) {
    // 	alist[i].style.color = color;
    // 	i += 1;
    //   }
    $("a").css("color", color);
  },
};
// function LinksSetColor(color) {
//   var alist = document.querySelectorAll("a");
//   var i = 0;
//   while (i < alist.length) {
//     alist[i].style.color = color;
//     i += 1;
//   }
// }

function BodySetBackgroundColor(color) {
  document.querySelector("body").style.backgroundColor = color;
}
function nightDayHandler(self) {
  var target = document.querySelector("body");
  if (self.value == "night") {
    Body.SetBackgroundColor("#202540");
    Body.SetColor("white");
    self.value = "day";
    
    Links.SetColor("#13c5af");
  } else {
    Body.SetBackgroundColor("white");
    Body.SetColor("#202540");
    self.value = "night";
    
    Links.SetColor("black");
  }
}
