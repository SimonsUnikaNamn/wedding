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

function updateCountdown() {
  const weddingDate = new Date("2025-05-24T00:00:00").getTime();
  const now = new Date().getTime();
  const timeLeft = weddingDate - now;

  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  document.getElementById("days").textContent = String(days).padStart(2, "0");
  document.getElementById("hours").textContent = String(hours).padStart(2, "0");
  document.getElementById("minutes").textContent = String(minutes).padStart(
    2,
    "0"
  );
  document.getElementById("seconds").textContent = String(seconds).padStart(
    2,
    "0"
  );
}

// Update the countdown every second
setInterval(updateCountdown, 1000);
// Initial call to avoid delay
updateCountdown();
