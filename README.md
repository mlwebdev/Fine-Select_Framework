# Fine-Select_Framework

This is framework is small but ever increasing. Features allow for selecting elements, 
creating elements, appending elements to other elements and setting multiple attributes to any element.

### Selectors
getId()           // document.getElementById();

getTag()          // document.getElementsByTagName();

getClass()        // document.getElementsByClassName();

getName()         // document.getElementsByName();

### Create Elements
createEl()        // document.createElement()
#### Create Element and append to a parent element and add text (innerHTML)
addElementOnTag() // Append child to parent by tagname with innerHTML

addElementOnId()  // Append child to parent by id with innerHTML

### Set multiple attributes to an HTML element 

#### Set attribute to element by tagname
setAttributes( getTag("p"), 
    { "id" : "newAttr", "class" : "newClass" }
);
Result: <p id="newAttr" class="newClass"></p>
You can then call:
getId("newAttr").innerHTML = "Added to dynamic attributes";
Result: <p id="newAttr" class="newClass"><Added to dynamic attributes</p>

#### Set attribute to element by id 
setAttributes(getId("app_main"), 
    { "class" : "newClass" }
);

