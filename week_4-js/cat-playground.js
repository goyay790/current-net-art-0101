

/* selecting elements */
const staticCat = document.querySelector(".static.cat-container");
const kittyFace = document.querySelector('.cat-face');
const kittyTail = document.querySelector('.cat-tail');
const kittyMessage = document.querySelector(".cat-speech-bubble");

//cat messages
const cat_messages = ['i wat cookie', 'FISH!', 'We need to invest in fishing subsidies', 'All dogs...', 'Keep Shamu locked up',
                     'birb!', 'it would be a shame if that vase fell', 'ahhh sunlight'];
const cat_faces = ['o w o', '^ ^', '-_-', '0 0', '* *', '$_$', '+ +', '! !', '~.~'];

/* manipulating content, styles, classes of elements */
kittyFace.innerHTML = "o w o";
kittyMessage.innerText = "i cat";
staticCat.classList.add("calico");

/* event listeners */
function stopWaggingTail() {
  staticCat.classList.remove("aggro");
  staticCat.classList.remove("happy");
  staticCat.classList.remove("casual");
}

function startWaggingTail(type) {
  switch (type) {
    case 1:
      staticCat.classList.add("aggro");
      break;

    case 2:
      staticCat.classList.add("happy");
      break;

    case 3:
      staticCat.classList.add("casual");
      break;
  
    default:
      stopWaggingTail()
      break;
  }
  
}

// toggle wagging animation on click
staticCat.onclick = () => {
  staticCat.classList.toggle("aggro");
};

// onclick the cat moves elsewhere
staticCat.addEventListener("click", function () {
  //we're being lazy with a static buffer, could make it cat-sized
  const catBuffer = 400;
  // pick a random screen position
  let randomX = rng(catBuffer, window.innerWidth - catBuffer);
  let randomY = rng(catBuffer, window.innerHeight - catBuffer);
  console.log(randomX);
  this.style.left = `${randomX}px`;
  this.style.top = `${randomY}px`;

  let newMessage = Math.floor(Math.random()*cat_messages.length);
  let newFace = Math.floor(Math.random()*cat_faces.length);

  kittyFace.innerHTML = cat_faces[newMessage];
  kittyMessage.innerText =cat_messages[newFace];

  let wag = rng(0,3);
  startWaggingTail(wag);


});


/*** HELPER FUNCTIONS ***/
function rng(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}