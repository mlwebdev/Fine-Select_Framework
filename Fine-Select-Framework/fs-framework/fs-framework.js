// fs-framework.js

var fs = {
	get_id : function (el) {
		return document.getElementById(el);
	}
	get_tag : function (el) {
		return document.getElementsyTagName(el);
	}
	get_class : function (el) {
		return document.getElementsByClassName(el);
	}
	get_name : function (el) {
		return document.getElementsName(el);
	}

}



