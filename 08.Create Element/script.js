// Create a Div

let divTag = document.createElement('div')

// adding a Class Name to the created divTag
divTag.className = "newDivTag"

// adding a Id Name to the created divTag
divTag.id = "newDivTag"

// set a Any Attribute to the create divTag
divTag.setAttribute("title","NewTag")

// Add text on Div Tag
divTag.textContent = "This Text inside Div Tag"

console.log(divTag) //<div></div>

// Append to the HTML
const section = document.querySelector("#section")

const h1 = document.querySelector("#head")

section.insertBefore(divTag,h1)