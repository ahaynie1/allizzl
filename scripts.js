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

// BACK AND FORTH GALLERY BUTTONS

document.addEventListener("DOMContentLoaded", function () {
  // Function to navigate to the next item
  function navigateToNextItem() {
    // Get the current item's position from the URL
    var currentPosition = getCurrentItemPosition();

    // Find the next item's position
    var nextPosition = currentPosition + 1;

    // Navigate to the next item
    window.location.href = findItemUrlByPosition(nextPosition);
  }

  // Function to navigate to the previous item
  function navigateToPrevItem() {
    // Get the current item's position from the URL
    var currentPosition = getCurrentItemPosition();

    // Find the previous item's position
    var prevPosition = currentPosition - 1;

    // Navigate to the previous item
    window.location.href = findItemUrlByPosition(prevPosition);
  }

  // Add event listeners to arrow buttons
  document
    .getElementById("nextButton")
    .addEventListener("click", navigateToNextItem);
  document
    .getElementById("prevButton")
    .addEventListener("click", navigateToPrevItem);
});

// Function to get the current item's position from the HTML
function getCurrentItemPosition() {
  // Get the current item's element
  var currentItemElement = document.querySelector(".gallery-item.current");

  // Check if the element is found
  if (currentItemElement) {
    // Extract the position from the data-position attribute
    var currentPosition = parseInt(currentItemElement.dataset.position);

    // Return the position
    return currentPosition;
  }

  // Return a default value or handle the case when the element is not found
  return 1; // Default position (adjust as needed)
}

// Function to find the item URL based on its position
function findItemUrlByPosition(position) {
  var items = document.querySelectorAll(".gallery-item");
  for (var i = 0; i < items.length; i++) {
    if (parseInt(items[i].dataset.position) === position) {
      return items[i].href;
    }
  }
  // Handle edge cases, e.g., when the last item is reached
  return null;
}
