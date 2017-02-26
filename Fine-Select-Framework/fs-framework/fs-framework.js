// fs-framework.js
window.addEventListener("DOMContentLoaded", function doItAll() {
	const fs={getId:function(a){return document.getElementById(a)},getTag:function(a){return document.getElementsByTagName(a)[0]},
	getClass:function(a, i){return document.getElementsByClassName(a)[i]},getName:function(a){return document.getElementsByName(a)[0]},crEl:function(a){return document.createElement(a)}};

/*	
	var _body = fs.getTag("body");
	_body.innerHTML = "<h2>Yes !! You Good</h2>";
*/

	var _yClass = fs.getClass("yClass", 0);
	_yClass.innerHTML = 
		"<h3>Oh Yes !! You Good</h3>" +
		"<p>This is the first element with the yClass</p>";

	var _yClass2 = fs.getClass("yClass", 1);
	_yClass2.innerHTML = 
		"<h4>Oh, Oh Yes !! You Real Good</h4>" +
		"<p>This is the second element with the yClass</p>";

	var _zClass = fs.getClass("zClass", 0);
	_zClass.innerHTML = 
		"<h4>Man !! You know you're Good</h4>" +
		"<p>This is the first element with the yClass</p>";
});

