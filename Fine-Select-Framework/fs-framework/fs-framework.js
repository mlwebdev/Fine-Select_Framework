// fs-framework.js
(function(getId,getTag,getClass,getName,crEl, setItem){this.getId=function(a){return document.getElementById(a)},this.getTag=function(a){return document.getElementsByTagName(a)[0]},this.getClass=function(a,i){return document.getElementsByClassName(a)[i]},this.getName=function(a){return document.getElementsByName(a)[0]},this.crEl=function(a){return document.createElement(a)},this.setItem=function(a, b) {return localStorage.setItem(a,b)}})();
	
	var _body = getTag("body");
	_body.innerHTML = "<h2>Yes !! You Good</h2>";
*/
	var _yClass = getClass("yClass", 0);
	_yClass.innerHTML = 
		"<h3>Oh Yes !! You Good</h3>" +
		"<p>This is the first element with the yClass</p>";

	var _yClass2 = getClass("yClass", 1);
	_yClass2.innerHTML = 
		"<h4>Oh, Oh Yes !! You Real Good</h4>" +
		"<p>This is the second element with the yClass</p>";

	var _zClass = getClass("zClass", 0);
	_zClass.innerHTML = 
		"<h4>Man !! You know you're Good</h4>" +
		"<p>This is the first element with the yClass</p>";
});

