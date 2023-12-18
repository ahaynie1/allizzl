document.addEventListener("DOMContentLoaded", function () {
  // Function to retrieve the gallery information from the HTML elements
  function getGalleryInfo() {
    var galleryItems = document.querySelectorAll(".gallery-item");
    var galleryInfo = [];

    galleryItems.forEach(function (item, index) {
      var position = index;
      var href = item.getAttribute("href");
      galleryInfo.push({ position: position, href: href });
    });

    return galleryInfo;
  }

  // Function to store the gallery information in local storage
  function storeGalleryInfo() {
    var galleryInfo = getGalleryInfo();

    try {
      localStorage.setItem("galleryInfo", JSON.stringify(galleryInfo));
      console.log("Gallery Info Stored:", galleryInfo);
    } catch (error) {
      console.error("Error storing gallery info:", error);
    }
  }

  // Function to navigate to the next item
  function navigateToNextItem() {
    var currentPosition = getCurrentItemPosition();
    var nextPosition = currentPosition + 1;
    var nextUrl = findItemUrlByPosition(nextPosition);

    if (nextUrl) {
      window.location.href = nextUrl;
    } else {
      console.error("Invalid URL for next item");
    }
  }

  // Function to navigate to the previous item
  function navigateToPrevItem() {
    var currentPosition = getCurrentItemPosition();
    var prevPosition = currentPosition - 1;
    window.location.href = findItemUrlByPosition(prevPosition);
  }

  // Function to get the current item's position from the stored data
  function getCurrentItemPosition() {
    var storedGalleryInfo = JSON.parse(localStorage.getItem("galleryInfo"));

    if (storedGalleryInfo) {
      var currentItemHref = window.location.href;
      var currentItem = storedGalleryInfo.find(
        (item) => item.href === currentItemHref
      );

      if (currentItem) {
        return currentItem.position;
      }
    }

    console.log("Current Position not found. Defaulting to 1.");
    return 1;
  }

  // Function to find the item URL based on its position
  function findItemUrlByPosition(position) {
    var storedGalleryInfo = JSON.parse(localStorage.getItem("galleryInfo"));

    if (storedGalleryInfo) {
      var item = storedGalleryInfo.find((item) => item.position === position);
      if (item) {
        return item.href;
      }
    }

    return null;
  }

  // Call the storeGalleryInfo function to store the information when the page loads
  storeGalleryInfo();

  // Add event listeners to arrow buttons
  document
    .getElementById("nextButton")
    .addEventListener("click", navigateToNextItem);
  document
    .getElementById("prevButton")
    .addEventListener("click", navigateToPrevItem);
});
