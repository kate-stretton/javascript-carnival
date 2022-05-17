// -    -   -   -   -  //
// JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //

console.log('Whack-a-Mole!')

// References to the cells
let moleHill = document.getElementsByTagName('td') // All the cells
let mole = document.createElement('img') // An element for the mole image
let audio = new Audio('whack-audio.wav')

let = document.getElementById('tally')

let count = 0

// Function to select a random cell and have the mole image appear
function showMole() {
  // Randomly generate a number between 1 & 25
  let randomNumber = Math.floor(Math.random() * moleHill.length)
  // Apply random number to a cell
  let randomCell = moleHill[randomNumber]
  // Define mole image
  mole.src = './mole.PNG'
  // Add mole image to the cell
  randomCell.appendChild(mole)
}

// Call function for mole to appear in random cell when browser loads
showMole()

// Function for clicking on mole
mole.onclick = function whackedMole() {
  // Remove mole from current cell
  mole.remove()
  // Play audio sound
  audio.play()
  count++
  // console.log(count)
  // Reveal mole in new cell
  showMole()
  displayCount()
}

function displayCount() {
  tally.innerHTML = 'Moles: ' + count
}
