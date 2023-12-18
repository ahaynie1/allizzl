document.addEventListener("DOMContentLoaded", function () {
  // Function to retrieve the gallery information from the HTML elements
  function getGalleryInfo() {
    var galleryItems = document.querySelectorAll(".gallery-item");
    var galleryInfo = [];

    galleryItems.forEach(function (item, index) {
      var position = parseInt(item.getAttribute("data-position"));
      var href = item.getAttribute("href");
      galleryInfo.push({ position: position, href: href });
    });

    return galleryInfo;
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
    var galleryInfo = getGalleryInfo();
    var currentItemHref = window.location.href;
    var currentItem = galleryInfo.find((item) => item.href === currentItemHref);

    if (currentItem) {
      return currentItem.position;
    }

    console.log("Current Position not found. Defaulting to 0.");
    return 0;
  }

  // Function to find the item URL based on its position
  function findItemUrlByPosition(position) {
    var galleryInfo = getGalleryInfo();
    var item = galleryInfo.find((item) => item.position === position);

    if (item) {
      return item.href;
    }

    return null;
  }

  // Add event listeners to arrow buttons
  document
    .getElementById("nextButton")
    .addEventListener("click", navigateToNextItem);
  document
    .getElementById("prevButton")
    .addEventListener("click", navigateToPrevItem);
});
