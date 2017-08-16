// fs-framework.js
(function (
  getId,            // document.getElementById()
  getTag,           // document.getElementsByTagName()
  getClass,         // document.getElementsByClassName()
  getName,          // document.getElementsByName()
  crEl,             // document.createElement()
  setItem,          // localStorage.setItem()
  setAttributes,    // Set multiple attributes to one element
  addElementOnTag,  // Append child to parent with innerHTML
  addElementOnId    // Append child to parent with innerHTML
  ) 
  {
  this.getId = function(a) {
    return document.getElementById(a)
  }, this.getTag = function(a) {
    return document.getElementsByTagName(a)[0]
  }, this.getClass = function(a, i) {
    return document.getElementsByClassName(a)[i]
  }, this.getName = function(a) {
    return document.getElementsByName(a)[0]
  }, this.createEl = function(a) {
    return document.createElement(a)
  }, this.setItem = function(a, b) {
    return localStorage.setItem(a, b)
  }, this.setAttributes = function (el, attrs) {
    for(var key in attrs) {
      el.setAttribute(key, attrs[key]);
    } 
  }, this.addElementOnTag = function (elp, elc, inp) {
       elc = this.createEl(elc)
       elp = this.getTag(elp)
       .appendChild(elc),
       elc.innerHTML = inp;
       return { elp, elc, inp }
  }, this.addElementOnId = function (elp, elc, inp) {
       elc = this.createEl(elc)
       elp = this.getId(elp)
       .appendChild(elc),
       elc.innerHTML = inp;
       return { elp, elc, inp }
  }
})();

