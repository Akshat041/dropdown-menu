function setupDropdowns(selector = ".dropdown") {
  const dropdowns = document.querySelectorAll(selector);

  dropdowns.forEach((dropdown) => {
    const toggleBtn = dropdown.querySelector(".dropdown-toggle");
    const dropdownMenu = dropdown.querySelector(".dropdown-menu");

    if (toggleBtn && dropdownMenu) {
      toggleBtn.addEventListener("click", () => {
        dropdownMenu.classList.toggle("hidden");
      });
    }
  });
}

export default setupDropdowns;
