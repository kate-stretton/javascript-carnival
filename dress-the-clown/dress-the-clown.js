// -    -   -   -   -  //
// JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //

console.log('Dress The Clown!')

//Declare variables for each part of clown
let head = document.getElementById('head')
let body = document.getElementById('body')
let shoes = document.getElementById('shoes')

// Create variables to store indexes of different clothing items
let hatIndex = 0
let outfitIndex = 0
let shoesIndex = 0

// Create variable to store index so clown can mix and match outfits
let changeIndex = 0

// Call functions using arrow keys
document.addEventListener('keydown', function (e) {
  if (e.key == 'ArrowRight') {
    moveRight()
  } else if (e.key == 'ArrowLeft') {
    moveLeft()
  } else if (e.key == 'ArrowUp') {
    moveUp()
  } else if (e.key == 'ArrowDown') {
    moveDown()
  }
})

// Write function to increment hat/outfit/shoes indexes on right arrow
function moveRight() {
  if (changeIndex == 0) {
    // if change index at 0, change hat
    if (hatIndex < 5) {
      hatIndex++
      head.src = './images/head' + hatIndex + '.png'
    }
  } else if (changeIndex == 1) {
    // if change index at 1, change outfit
    if (outfitIndex < 5) {
      outfitIndex++
      body.src = './images/body' + outfitIndex + '.png'
    }
  } else if (changeIndex == 2) {
    // if change index at 2, change shoes
    if (shoesIndex < 5) {
      shoesIndex++
      shoes.src = './images/shoes' + shoesIndex + '.png'
    }
  }
}

// Write function to decrement hat/outfit/shoes indexes on left arrow
function moveLeft() {
  if (changeIndex == 0) {
    // if the change index is at 0, change hat
    if (hatIndex > 0) {
      hatIndex--
      head.src = './images/head' + hatIndex + '.png'
    }
  } else if (changeIndex == 1) {
    // if the change index is at 1, change outfit
    if (outfitIndex > 0) {
      outfitIndex--
      body.src = './images/body' + outfitIndex + '.png'
    }
  } else if (changeIndex == 2) {
    //if the change index is at 2, change shoes
    if (shoesIndex > 0) {
      shoesIndex--
      shoes.src = './images/shoes' + shoesIndex + '.png'
    }
  }
}

// Write function to select type of clothing (decrement index)
function moveUp() {
  if (changeIndex > 0) {
    changeIndex--
  }
}

// Write function to select type of clothing (increment index)
function moveDown() {
  if (changeIndex < 2) {
    changeIndex++
  }
}
