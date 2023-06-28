window.addEventListener('load', function() {
    var audio = document.getElementById('music');
    audio.play();
  });




  // Update the background
function updateBackground() {
    const colors = ["#da68a0", "#77c5893", "#316879", "#f47a60", "#7fe7dc", "#1fbfb8", ]; // Add more colors if desired
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.querySelector(".hero").style.backgroundColor = randomColor;
  }
  
  // Set an interval to update the background every 2 seconds
  setInterval(updateBackground, 2000);
  

//    Alert in in-browser JavaScript - Does not return anything
        alert("عيد أل أذا مبارك,  ٱلسَّلَامُ عَلَيْكُمْ")
        

        Prompt in JS
        let name = prompt("What is your name?", "Guest");
        console.log(name);
