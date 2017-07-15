// fs-framework.js
(function(getId, getTag, getClass, getName, crEl, setItem) {
  this.getId = function(a) {
    return document.getElementById(a)
  }, this.getTag = function(a) {
    return document.getElementsByTagName(a)[0]
  }, this.getClass = function(a, i) {
    return document.getElementsByClassName(a)[i]
  }, this.getName = function(a) {
    return document.getElementsByName(a)[0]
  }, this.crEl = function(a) {
    return document.createElement(a)
  }, this.setItem = function(a, b) {
    return localStorage.setItem(a, b)
  }
})();
