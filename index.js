/* Enter the code to remove the main node element under this comment */
const main = document.querySelector('main')
main.remove()
let yourName = "Carla"
/* Create your new element here and assign it to newHeader */
const newHeader = document.createElement('h1')
newHeader.setAttribute('id', 'victory')
newHeader.innerText = yourName + "is the champion"
document.body.appendChild("h1")


// for (let i = 0; i < 3; i++) {
//   let victory = 
//   document.createElement('victory')
//   victory.innerHTML = (i + 1).toString()
//   newHeader.appendChile(victory)
// }
