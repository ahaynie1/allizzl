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
});
new CircleType(document.getElementById("circletype")).radius(10);
