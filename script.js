// Function to apply a fade effect to elements when they become visible during scrolling
function fadeEffect() {
  // To select every element that has class "fade"
  var fade = document.querySelectorAll(".fade");

  // Loop over every element using the class "fade"
  for (var i = 0; i < fade.length; i++) {
    // To Obtain the browser window's height
    var windowHeight = window.innerHeight;

    // To obtain the current element's top position relative to the viewport
    var elementTop = fade[i].getBoundingClientRect().top;

    // To set up a threshold for the element's visibility
    var elementVisible = 150;

    // Check that the element's top position is inside the visible range
    if (elementTop < windowHeight - elementVisible) {
      // If the element is within the visible range, add the "active" class
      fade[i].classList.add("active");
    } else {
      // If the element is outside the visible range, remove the "active" class
      fade[i].classList.remove("active");
    }
  }
}

// Add a scroll event listener to the window, calling the fadeEffect function
window.addEventListener("scroll", fadeEffect);
