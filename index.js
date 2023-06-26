window.addEventListener('load', function() {
    var audio = document.getElementById('music');
    audio.play();
  });




  // Update the background
function updateBackground() {
    const colors = ["#ff0000", "#00ff00", "#0000ff"]; // Add more colors if desired
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.querySelector(".hero").style.backgroundColor = randomColor;
  }
  
  // Set an interval to update the background every 2 seconds
  setInterval(updateBackground, 2000);
  

//    Alert in in-browser JavaScript - Does not return anything
        alert("JENAB EID MUBARAK !  "); 

        Prompt in JS
        let name = prompt("What is your name?", "Guest");
        console.log(name);
