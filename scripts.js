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

  $(document).ready(function() {
    // Usage code for the "circleText" plugin
    $('.circle').circleText({
        padding: 10,
        glue: " ",
        turn: true,
        duration: 10,
        repeat: 1,
        radius: 100,
        background: "white",
        rounded: true,
        content: "Hello, Circle Text!",
        reverse: false
    });
});
//   new CircleType(document.getElementById("circletype"));