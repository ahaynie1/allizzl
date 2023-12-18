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
    console.log("Current Position:", currentPosition);

    var nextPosition = currentPosition + 1;
    console.log("Next Position:", nextPosition);

    var nextUrl = findItemUrlByPosition(nextPosition);
    console.log("Next URL:", nextUrl);

    if (nextUrl) {
      window.location.href = nextUrl;
    } else {
      console.error("Invalid URL for next item");
    }
  }

  // Function to navigate to the previous item
  function navigateToPrevItem() {
    var currentPosition = getCurrentItemPosition();
    console.log("Current Position:", currentPosition);

    var prevPosition = currentPosition - 1;
    var prevUrl = findItemUrlByPosition(prevPosition);
    console.log("Previous URL:", prevUrl);

    if (prevUrl) {
      window.location.href = prevUrl;
    } else {
      console.error("Invalid URL for previous item");
    }
  }

  // Function to get the current item's position from the stored data
  function getCurrentItemPosition() {
    var galleryInfo = getGalleryInfo();
    console.log("Gallery Info:", galleryInfo);

    var currentItemHref = window.location.href;
    console.log("Current Item Href:", currentItemHref);

    var currentItem = galleryInfo.find((item) => item.href === currentItemHref);
    console.log("Current Item:", currentItem);

    if (currentItem) {
      return currentItem.position;
    }

    console.log("Current Position not found. Defaulting to 0.");
    return 0;
  }

  // Function to find the item URL based on its position
  function findItemUrlByPosition(position) {
    var galleryInfo = getGalleryInfo();
    console.log("Searching for position:", position);

    var item = galleryInfo.find((item) => item.position === position);
    console.log("Item:", item);

    if (item) {
      return item.href;
    }

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
});
