# Fine-Select_Framework

This is framework is small but ever increasing. Features allow for selecting elements, 
creating elements, appending elements to other elements and setting multiple attributes to any element.

### Selectors

getId()           // document.getElementById();<br />
getTag()          // document.getElementsByTagName();<br />
getClass()        // document.getElementsByClassName();<br />
getName()         // document.getElementsByName();<br />

#### Usage :
var app = getId("app");<br />
var div = getTag("div");<br />
var tInput = getClass("form-control");<br />
var psswd = getName("password");


### Create Elements
createElement()        // document.createElement()
#### Usage :
var new_div = createElement("div");

#### Create Element, append to a parent element and add text (innerHTML)

addElementOnTag() // Append child to parent by tagname with innerHTML <br />
addElementOnId()  // Append child to parent by id with innerHTML
#### Usage :
addElementOnTag("body", "new_div", "This is a new dynamic div");<br />
or <br />
addElementOnTag("body", "new_div", null); // creating element with not text (null or empty string like " ")

addElementOnId("main_div", "new_div", "This is a child div");<br />
or <br />
addElementOnId("main_div", "new_div", null);

### Set multiple attributes to an HTML element 

#### Set attribute to element by tagname
#### Usage :
setAttributes( getTag("p");
    { "id" : "newAttr", "class" : "newClass" }
);

// Result: paragraph with id="newAttr" & class="newClass" 

You can then call:
getId("newAttr").innerHTML = "Added to dynamic attributes";

// Result: paragraph with id="newAttr" & class="newClass" & inner text is "Added to dynamic attributes"

#### Set attribute to element by id
#### Usage : 
setAttributes(getId("app_main"), 
    { "class" : "newClass" }
);

