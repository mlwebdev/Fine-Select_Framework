# Fine-Select_Framework

This is framework is small but ever increasing. Features allow for selectiong elements, 
creating elements, appending elements to other elements and setting multiple attributes to any element.

### Selectors
getId()           // document.getElementById();

getTag()          // document.getElementsByTagName();

getClass()        // document.getElementsByClassName();

getName()         // document.getElementsByName();

### Create Elements
crEl()            // document.createElement()
#### Create Element and append to a parent element
addElementOnTag() // Append child to parent by tagname with innerHTML

addElementOnId()  // Append child to parent by id with innerHTML

### Set multiple attributes to an HTML element 

#### Set attribute to element by tagname
setAttributes( getTag("p"), 
    { "id" : "newAttr", "class" : "newClass" }
);
This will result to <p id="newAttr" class="newClass"></p>
You can then call:
getId("newAttr").innerHTML = "Added to dynamic attributes";

#### Set attribute to element by id 
setAttributes(getId("app_main"), 
    { "class" : "newClass" }
);

