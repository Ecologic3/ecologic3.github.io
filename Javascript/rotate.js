﻿function rotateBanners(elem) {
var active = $(elem+" img.active");
var next = active.next();
if (next.length == 0)
next = $(elem+" img:first");
active.removeClass("active").fadeOut(2000);
next.addClass("active").fadeIn(2000);
}
 
function prepareRotator(elem) {
$(elem+" img").fadeOut(0);
$(elem+" img:first").fadeIn(0).addClass("active");
}
 
function startRotator(elem) {
prepareRotator(elem);
setInterval("rotateBanners('"+elem+"')", 10000);
}