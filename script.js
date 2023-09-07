document.addEventListener("DOMContentLoaded", function () {
  const paragraph = document.querySelector(".about p");
  const image = document.querySelector(".about img");

  image.addEventListener("click", () => {
    if (paragraph.style.display === "none" || paragraph.style.display === "") {
      paragraph.style.display = "block";
    } else {
      paragraph.style.display = "none";
    }
  });
});
