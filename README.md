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
#### Usage :
createEl()        // document.createElement()
#### Create Element and append to a parent element and add text (innerHTML)
#### Usage :
addElementOnTag() // Append child to parent by tagname with innerHTML

addElementOnId()  // Append child to parent by id with innerHTML

### Set multiple attributes to an HTML element 

#### Set attribute to element by tagname
#### Usage :
setAttributes( getTag("p"), 
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

