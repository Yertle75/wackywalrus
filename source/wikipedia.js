var element = document.getElementById("mw-page-base");
element.parentNode.removeChild(element);
var element = document.getElementById("mw-head-base");
element.parentNode.removeChild(element);
var element = document.getElementById("mw-navigation");
element.parentNode.removeChild(element);
var element = document.getElementById("footer");
element.parentNode.removeChild(element);
var element = document.getElementsByClassName("navbox");
element[0].parentNode.removeChild(element[0]);
var element = document.getElementById("content");
element.style.padding = "100px"
element.style.margin = "0px"
