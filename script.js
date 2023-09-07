document.addEventListener("DOMContentLoaded", function () {
  const shortDescription = document.querySelector(".short-description");
  const fullDescription = document.querySelector(".full-description");
  const showMoreBtn = document.getElementById("show-more-btn");

  showMoreBtn.addEventListener("click", () => {
    if (
      fullDescription.style.display === "none" ||
      fullDescription.style.display === ""
    ) {
      fullDescription.style.display = "block";
      shortDescription.style.display = "none";
      showMoreBtn.textContent = "Show Less";
    } else {
      fullDescription.style.display = "none";
      shortDescription.style.display = "block";
      showMoreBtn.textContent = "Show More";
    }
  });
});
