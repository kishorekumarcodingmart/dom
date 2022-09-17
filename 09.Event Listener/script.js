const button = document.getElementById("Btn")

function sayHi(e){
    window.alert("Button Was Clicked")
    
    console.log(e) // PointerEvent

    console.log(e.target) //<button id="Btn">Say HI</button>

    console.log(e.target.id) //Btn

    console.log(e.target.className) //class1 class2 class3

    console.log(e.target.classList) //Return DOMTokenList

    console.log(e.type) //click

    console.log(e.clientX) // 45 - Position of Mouse While the Clicked X Direction

    console.log(e.clientY) // 118 - Position of Mouse While the Clicked X Direction

    // The offsetX property returns the x-coordinate of the mouse pointer, 
    // relative to the target element. 

    console.log(e.offsetX) //29

    console.log(e.offsetY) //8

    console.log(e.altKey) 
    console.log(e.ctrlKey)
    console.log(e.shiftKey)
    // true if Alt Button was pressed while button click else false

}

button.addEventListener("click",sayHi)