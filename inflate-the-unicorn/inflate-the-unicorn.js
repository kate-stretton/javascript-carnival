// -    -   -   -   -  //
// JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //

console.log('Inflate The Unicorn!')

// Create an array of unicorn images
let unicorns = document.getElementsByTagName('img')

// Many failed attempts at giving the unicorns names before adding name as an ID to CSS file
// let Kate = document.getElementById('unicorn1')
// let Justine = document.getElementById('unicorn2')
// let Emily = document.getElementById('unicorn3')

// unicorns[0] = Kate
// unicorns[1] = Justine
// unicorns[2] = Emily

// Write a function to change images when clicking on unicorns
function unicornClicked(e) {
  // Variable to click on specific unicorn
  let unicorn = e.target
  // If unicorn image is 0, change to 1
  if (unicorn.src.match('./images/unicorn-0.png')) {
    unicorn.src = './images/unicorn-1.png'
    // If unicorn image is 1, change to 2
  } else if (unicorn.src.match('./images/unicorn-1.png')) {
    unicorn.src = './images/unicorn-2.png'
    // If unicorn image is 2, change to 3
  } else if (unicorn.src.match('./images/unicorn-2.png')) {
    unicorn.src = './images/unicorn-3.png'
    // Alert player that unicorn is grateful when image is 3!
    alert(unicorn.id + ' says thanks!')
  }
}

// Loop through array of unicorn images
for (let i = 0; i < unicorns.length; i++) {
  unicorns[i].onclick = unicornClicked
}

// This was a previous ttempt at grateful unicorns before I realised the alert had to happen within unicornClicked
// function unicornGratitude() {
//   if ((unicorns.src = './images/unicorn-3.png')) {
//     alert(unicorns.id + ' says thanks!')
//   }
// }
