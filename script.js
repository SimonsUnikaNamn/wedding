// Add this new file and link it in your HTML before the closing body tag
document.addEventListener("DOMContentLoaded", function () {
  // Create the observer
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        // Add 'visible' class when element comes into view
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          // Optional: stop observing after animation
          // observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.1, // Trigger when 10% of the element is visible
    }
  );

  // Observe all fade-in elements
  document.querySelectorAll(".fade-in, .movie-card").forEach((element) => {
    observer.observe(element);
  });
});
