document.addEventListener("DOMContentLoaded", function () {
  // Portfolio Filtering
  const filterButtons = document.querySelectorAll(".filter-btn");
  const portfolioItems = document.querySelectorAll(".portfolio-item");

  filterButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const category = button.getAttribute("data-filter");

      filterButtons.forEach(btn => btn.classList.remove("active"));
      button.classList.add("active");

      portfolioItems.forEach((item) => {
        if (category === "all" || item.classList.contains(category)) {
          item.classList.add("show");
        } else {
          item.classList.remove("show");
        }
      });
    });
  });

  // Scroll Animation: Fade in Sections on Scroll
  const sections = document.querySelectorAll(".hidden");

  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.2 }
  );

  sections.forEach((section) => {
    observer.observe(section);
  });
});
