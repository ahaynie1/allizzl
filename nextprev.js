document.addEventListener("DOMContentLoaded", function () {
  // Function to retrieve the gallery information from the HTML elements
  function getGalleryInfo() {
    var galleryItems = document.querySelectorAll(".gallery-item");
    console.log("Gallery Items:", galleryItems);

    return Array.from(galleryItems).map(function (item) {
      return {
        position: parseInt(item.getAttribute("data-position")),
        href: item.getAttribute("href"),
      };
    });
  }

  // Function to navigate to the next or previous item
  function navigateToItem(direction) {
    var currentPosition = getCurrentItemPosition();
    var newPosition = currentPosition + direction;
    var newUrl = findItemUrlByPosition(newPosition);

    if (newUrl) {
      window.location.href = newUrl;
    } else {
      console.error(
        "Invalid URL for the requested item position:",
        newPosition
      );
    }
  }

  // Function to get the current item's position from the stored data
  function getCurrentItemPosition() {
    var galleryInfo = getGalleryInfo();
    console.log("Gallery Info:", galleryInfo);

    var currentItemHref = window.location.pathname.split("/").pop();
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
  var nextButton = document.getElementById("nextButton");
  if (nextButton) {
    nextButton.addEventListener("click", function () {
      navigateToItem(1); // Move to the next item
    });
  }

  var prevButton = document.getElementById("prevButton");
  if (prevButton) {
    prevButton.addEventListener("click", function () {
      navigateToItem(-1); // Move to the previous item
    });
  }
});
