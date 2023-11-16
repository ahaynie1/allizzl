console.log("scripts.js loaded");

document.addEventListener("DOMContentLoaded", function () {
  // Get a reference to the button with id "arrow" and the main content with id "gallery"
  const scrollButton = document.getElementById("arrow");
  const mainContent = document.getElementById("gallery");

  // Add a click event listener to the button
  scrollButton.addEventListener("click", function () {
    // Use the `scrollIntoView` method to scroll to the main content
    mainContent.scrollIntoView({ behavior: "smooth" });
  });
  $(document).ready(function () {
    // Usage code for the "circleText" plugin
    $(".circle").circleText({
      padding: 34,
      glue: " ",
      turn: true,
      duration: 20,
      repeat: 1,
      radius: 100,
      rounded: true,
      content: "scroll to see my work!",
      reverse: true,
    });
  });
  // widow adjust usage
  wt.fix({
    elements: "p li ul h1 h2 h3 h4 h5",
    chars: 20,
    method: "padding-right",
    event: "resize",
  });
});
