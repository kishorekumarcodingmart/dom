const heading = document.getElementById('heading')

 
console.log(heading) // Return <h1 id="heading">Hello World</h1>

console.log(heading.innerHTML) //Hello World

console.log(heading.textContent) //Hello World

// textContent works on style
// innerHTML does not work with style

// changing the Elements 
heading.innerHTML = "innerHTML"
heading.textContent = "textContent"

// style
heading.style.color = "red"
heading.style.textDecoration = "underline" //Here style Property are Cammel Cased

