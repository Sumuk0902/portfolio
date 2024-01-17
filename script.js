function typewriter(element, message, speed=100) {
    let i = 0;
    let interval = setInterval(() => {
      if (i < message.length) {
        element.innerHTML += message[i];
        i++;
      } else {
        clearInterval(interval);
        // Wait for a short period before starting the next sentence
        setTimeout(() => {
          // Clear the contents of the element
          element.innerHTML = "";
          // Call the typewriter function again with the next sentence
          typewriter(element, messageArray[currentSentence], speed);
        }, 1000);
        //for html
        
      }
    }, speed);
  }
  // Define the sentences to be displayed
  let messageArray = [
    "WEB DEVELOPER.",
  ];

  // Initialize the current sentence index
  let currentSentence = 0;

  // Wait for the DOM to be fully loaded
  document.addEventListener("DOMContentLoaded", () => {
    // Display the first sentence
    let sentence = document.getElementById("sentence");
    typewriter(sentence, messageArray[currentSentence], 100);
  });
  //
