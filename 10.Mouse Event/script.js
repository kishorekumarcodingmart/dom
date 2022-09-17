const button = document.getElementById('Btn')
const box = document.getElementById('box')
const trackPad = document.getElementById('trackPad')
const input = document.querySelector("#text")

// Click Event
button.addEventListener('click',(e)=>{
    console.log(e.type)
})

// Double Click Event
button.addEventListener('dblclick',(e)=>{
    console.log(e.type)
})

// Mouse Down
button.addEventListener('mousedown',(e)=>{
    console.log(e.type)
})

// Mouse Up
button.addEventListener('mouseup',(e)=>{
    console.log(e.type)
})

// Mouse Enter - for only Parent Elemet
box.addEventListener('mouseenter',(e)=>{
    console.log(e.type)
})

// Mouse Leaves - for only Parent Elemet
box.addEventListener('mouseleave',(e)=>{
    console.log(e.type)
})

// Mouse Over - for Both Parent and Child Element
box.addEventListener('mouseover',(e)=>{
    console.log(e.type)
})

// Mouse Out - for Both Parent and Child Element
box.addEventListener('mouseout',(e)=>{
    console.log(e.type)
})

// Mouse Move inside Element
box.addEventListener('mousemove',(e)=>{
    console.log(e.type)
})

// Mouse Pointer
trackPad.addEventListener('mousemove',(e)=>{
    trackPad.textContent = e.offsetX + " " + e.offsetY
})

// keydown - keyup - keypress - focus - blur - cut - paste - change - submit
input.addEventListener('keydown',(e)=>{
    e.preventDefault() // Don't Reload the Page
    console.log(e.target.value)
})