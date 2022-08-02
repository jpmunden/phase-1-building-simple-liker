// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

document.addEventListener("DOMContentLoaded", (event) => {
  console.log('Dom fully loaded and parsed');
  document.querySelector('#modal').classList.add('hidden')
  clickListener()
});

function clickListener(){
  document.addEventListener('click', (event) => {
    if(event.target.classList[0] === 'like-glyph') {
      mimicServerCall()
      .then((resp) => {
        console.log(resp)
      })
      .catch((error) => {
        console.log(error.message)
      })
    }
  })
}




//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
