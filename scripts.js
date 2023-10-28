console.log("scripts.js loaded");

document.addEventListener("DOMContentLoaded", function () {
  // Get a reference to the button with id "arrow" and the main content with id "gallery"
  const scrollButton = document.getElementById("arrow");
  const mainContent = document.getElementById("gallery");

  console.log("scripts.js loaded");
  // Add a click event listener to the button
  scrollButton.addEventListener("click", function () {
    // Use the `scrollIntoView` method to scroll to the main content
    mainContent.scrollIntoView({ behavior: "smooth" });
  });
  console.log("scripts.js loaded");
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
    console.log("scripts.js loaded");
  });
});
