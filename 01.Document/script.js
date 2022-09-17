// Logs the different Properties and Methods of Document Object
console.dir(document)

// Properties and Methods
console.log(document.domain)  //127.0.0.1
console.log(document.URL) //http://127.0.0.1:5500/01.Document/index.html
console.log(document.title) //01.Document

//Version of HTML
console.log(document.doctype) //<!DOCTYPE html> return null if not mentioned

console.log(document.head) //logs DOM Tree of Head Tag
console.log(document.body) //logs DOM Tree of Body Tag

//Return a HTML Collection List in Which all DOM Element 
// Stored with their Childers
console.log(document.all)

// Indexing Elements
console.log(document.all[0]) //<html> .... </html>

// Changing Elements By Indexing
document.all[6].textContent = "Changed By DOM"

// Returns a HTML Collection of form Element else
// Return a Empty HTML Collection
console.log(document.forms) // []


