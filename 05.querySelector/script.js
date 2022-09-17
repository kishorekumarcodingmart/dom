// we can use css selector in querySelector
const heading = document.querySelector("#heading")

heading.style.color = "red"

// It Grabs the Very First Element
const input = document.querySelector("input")

input.value = "Enter the Name"

const submitButton = document.querySelector("input[type='submit']")

submitButton.value = "Changed By DOM"

// To Grab last Element using Css Selectors

const lastItem = document.querySelector("li:last-child")

lastItem.style.color = "red"

// To Grab Second Element using Css Selectors

const secondItem = document.querySelector("li:nth-child(2)")

secondItem.style.color = "blue"