// Next and previous buttons script

console.log("Next Previous Buttons script loaded");

// Function to store the gallery information in local storage
function storeGalleryInfo() {
  // Select all gallery items on the page
  var galleryItems = document.querySelectorAll(".gallery-item");

  // Create an array to store gallery information
  var galleryInfo = [];

  // Iterate over each gallery item and store data directly in local storage
  galleryItems.forEach(function (item, index) {
    var position = index;
    var href = item.getAttribute("href");
    galleryInfo.push({ position: position, href: href });
  });

  // Store the galleryInfo array in local storage
  try {
    localStorage.setItem("galleryInfo", JSON.stringify(galleryInfo));
    console.log("Gallery Info Stored:", galleryInfo);
  } catch (error) {
    console.error("Error storing gallery info:", error);
  }
}

// Function to retrieve the current item's position from the stored data
function getCurrentItemPosition() {
  // Retrieve the stored gallery information
  var storedGalleryInfo = JSON.parse(localStorage.getItem("galleryInfo"));

  // Check if the information is found
  if (storedGalleryInfo) {
    // Find the current item's position based on the current URL
    var currentItemHref = window.location.href;
    var currentItem = storedGalleryInfo.find(
      (item) => item.href === currentItemHref
    );

    // Check if the current item is found
    if (currentItem) {
      return currentItem.position;
    }
  }

  // Return a default value or handle the case when the information is not found
  console.log("Current Position not found. Defaulting to 1.");
  return 1; // Default position (adjust as needed)
}

// Call the storeGalleryInfo function to store the information when the page loads
storeGalleryInfo();

// Function to navigate to the next item
function navigateToNextItem() {
  // Get the current item's position from the stored data
  var currentPosition = getCurrentItemPosition();

  // Find the next item's position
  var nextPosition = currentPosition + 1;

  // Log current position
  console.log("Current Position:", currentPosition);

  // Log next position
  console.log("Next Position:", nextPosition);

  // Log the calculated URL
  var nextUrl = findItemUrlByPosition(nextPosition);
  console.log("Next URL:", nextUrl);

  // Check if the URL is valid before navigating
  if (nextUrl) {
    window.location.href = nextUrl;
  } else {
    // Handle the case where the URL is null
    console.error("Invalid URL for next item");
  }
}

// Function to navigate to the previous item
function navigateToPrevItem() {
  // Get the current item's position from the stored data
  var currentPosition = getCurrentItemPosition();

  // Find the previous item's position
  var prevPosition = currentPosition - 1;

  // Navigate to the previous item
  window.location.href = findItemUrlByPosition(prevPosition);
}

// Function to get the current item's position from the stored data
function getCurrentItemPosition() {
  // Retrieve the stored gallery information
  var storedGalleryInfo = JSON.parse(localStorage.getItem("galleryInfo"));

  // Log the stored gallery information to check its content
  console.log("Stored Gallery Info:", storedGalleryInfo);

  // Check if the information is found
  if (storedGalleryInfo) {
    // Find the current item's position based on the current URL
    var currentItemHref = window.location.href;
    var currentItem = storedGalleryInfo.find(
      (item) => item.href === currentItemHref
    );

    // Check if the current item is found
    if (currentItem) {
      // Ensure currentPosition is correctly defined
      var currentPosition = currentItem.position;
      console.log("Current Position:", currentPosition);
      return currentPosition;
    }
  }

  // Return a default value or handle the case when the information is not found
  console.error("Current Position not found. Defaulting to 1.");
  return 1; // Default position (adjust as needed)
}

// Function to find the item URL based on its position
function findItemUrlByPosition(position) {
  // Retrieve the stored gallery information
  var storedGalleryInfo = JSON.parse(localStorage.getItem("galleryInfo"));

  // Log the stored gallery information and the position being searched
  console.log("Stored Gallery Info:", storedGalleryInfo);
  console.log("Searching for position:", position);

  // Check if the information is found
  if (storedGalleryInfo) {
    // Find the item's URL based on its position
    var item = storedGalleryInfo.find((item) => item.position === position);
    if (item) {
      return item.href;
    }
  }

  // Handle edge cases, e.g., when the last item is reached
  console.error("URL not found for position:", position);
  return null;
}

// Add event listeners to arrow buttons
document
  .getElementById("nextButton")
  .addEventListener("click", navigateToNextItem);
document
  .getElementById("prevButton")
  .addEventListener("click", navigateToPrevItem);
