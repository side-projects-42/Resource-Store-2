// We use this code, known as Objects, to control toggling like / unlike status

let glyphStates = {
  "♡": "♥",
  "♥": "♡",
};

let colorStates = {
  red: "",
  "": "red",
};

// STEP 1: This code is what lets JavaScript find the elements that we want to make clickable.
// Without JavaScript, clicking on these heart shapes does nothing. Uncomment
// this code and refresh the demo page.

let articleHearts = document.querySelectorAll(".like-glyph");

function likeCallback(e) {
  let heart = e.target;
  mimicServerCall()
    .then(function (serverMessage) {
      // STEP 2: Uncomment the next 3 lines.
      // We'll use Pillar 1 (DOM Manipulation) to update the screen and
      // mimic Pillar 3 (Server Communication) to only update the screen if the
      // sending of information to the server succeeds.
      alert("You notified the server!");
      alert(serverMessage);
      heart.innerText = glyphStates[heart.innerText];
      heart.style.color = colorStates[heart.style.color];
    })
    .catch(function (error) {
      alert("Something went wrong!");
    });
}

// STEP 3: In order for the call to the server and the update of the screen to
// work, the elements we identify in STEP 1 need to be told to run that update
// code when an "event" is fired. That's Pillar 2, event handling. Uncomment
// this code.

for (let glyph of articleHearts) {
  glyph.addEventListener("click", likeCallback);
}

// STEP 4:

// When all the STEPs' code changes have been complete, you'll be able to see a
// working demonstration of our reference example. Sure, it's maybe not as
// pretty as a professional site, but they're only different from our site in
// style, not substance.

//------------------------------------------------------------------------------
// Ignore after this point. Used only for demo purposes
//------------------------------------------------------------------------------

function mimicServerCall() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve("Pretend remote server notified of action!");
    }, 300);
  });
}
