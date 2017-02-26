// fs-framework.js
var fs = {
	getId : function (el) {
		return document.getElementById(el);
	},
	getTag : function (el) {
		return document.getElementsByTagName(el)[0];
	},
	getClass : function (el) {
		return document.getElementsByClassName(el)[0];
	},
	getName : function (el) {
		return document.getElementsByName(el)[0];
	},
	crEl : function (el){ 
		return document.createElement(el);
	}
}



