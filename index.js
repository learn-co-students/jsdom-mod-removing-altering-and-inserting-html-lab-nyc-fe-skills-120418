/* Enter the code to remove the main node element under this comment */
const main = document.getElementById('main')
main.remove()

/* Create your new element here and assign it to newHeader */
const newHeader = document.createElement('h1')
let body = document.getElementsByTagName("body")
newHeader.setAttribute("id","victory")
newHeader.innerText = "Andy is the champion!"
document.body.appendChild(newHeader)
