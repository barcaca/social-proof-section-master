// Constants for star image source
const STAR_IMAGE_SRC = "images/icon-star.svg";

/**
 * Adds stars to the specified containers.
 *
 * @param {string} containerClass - The class of the containers to which stars will be added.
 * @param {number} numberOfStars - The number of stars to add to each container.
 */
function addStarsToContainers(containerClass, numberOfStars) {
  // Select all containers with the specified class
  const starContainers = document.querySelectorAll(`.${containerClass}`);

  // Iterate through each container
  starContainers.forEach((container) => {
    // Add the specified number of stars to the container
    for (let i = 0; i < numberOfStars; i++) {
      // Create a new image element for the star
      const starImg = document.createElement("img");

      // Set the star image source
      starImg.src = STAR_IMAGE_SRC;

      // Append the star image to the container
      container.appendChild(starImg);
    }
  });
}

// Add 5 stars to containers with the class "intro__stars--5"
addStarsToContainers("intro__stars--5", 5);
