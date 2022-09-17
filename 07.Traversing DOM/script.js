const list = document.getElementById('heading')

const body = document.getElementById('body')

const header = document.getElementById('header')

// log the Parent Node
console.log(list.parentNode) // <header>...</header>

console.log(list.parentNode.parentNode) // <body>...</body>

// log the Parent Element
console.log(list.parentElement) // <header>...</header>

console.log(list.parentElement.parentElement) // <body>...</body>

// log the Child Node
console.log(body.childNodes) //Return Node List it also consider "\n" as text Element

// !Imporant Use This!!
console.log(body.children) // Return HTML Collection it does not take "\n" as text Element

// The main difference between an HTMLCollection and a NodeList 
// is that one is live and one is static. 
// This means that when an element is appended to the DOM, 
// a live node will recognize the new element while a static node 
// will not.

// log the First Element
console.log(body.firstChild) // "text"

console.log(body.firstElementChild) // // <header>...</header>

// log the Last Element

console.log(body.lastChild) // "text"

console.log(body.lastElementChild) // // <script>...</script> from the live server vs code

// Next Sibling
console.log(header.nextSibling) // #text

console.log(header.nextElementSibling) // <section>...</section>

// PerviousSibling
console.log(body.previousSibling) //#text

console.log(body.previousElementSibling) // <head>...</head>