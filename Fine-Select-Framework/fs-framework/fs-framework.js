// fs-framework.js

var fs = {
  	get_id : function (el) {
		return document.getElementById(el);
	}
	get_tag : function (el) {
		return document.getElementsByTagName(el)[0];
	}
	get_class : function (el) {
		return document.getElementsByClassName(el)[0];
	}
	get_name : function (el) {
		return document.getElementsByName(el)[0];
	}
	cr_el : function (el){ 
	return document.createElement(el);
	}
}



