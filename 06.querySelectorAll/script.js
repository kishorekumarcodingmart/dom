// Works Same as ClassName
// Differnt is that instent of class reference 
// we are refering to tag name

const list = document.querySelectorAll("li")

// Return HTML Collection
console.log(list)

// Indexing Values
console.log(list[0].textContent) //One

// Changing the Values using Indexing
list[1].innerHTML = "Changed using DOM"

// Adding style usind Indexing
list[2].style.color = "red"

// list.style.backgroundColor = "blue" //Error

// Adding Background Color for All the Elements using For..loop
for (let i = 0;i < list.length; i++ ){
    list[i].style.backgroundColor = "blue"
}