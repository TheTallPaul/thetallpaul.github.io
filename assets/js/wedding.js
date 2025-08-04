function updateCountdown() {
  // Set the wedding date: June 6th, 2026
  const weddingDate = new Date("2026-06-06T00:00:00").getTime();
  const now = new Date().getTime();
  const timeLeft = weddingDate - now;

  // Check if the wedding day has arrived
  if (timeLeft < 0) {
    document.querySelector(".countdown-container").innerHTML =
      '<div class="countdown-expired">🎉 Our Wedding Day is Here! 🎉</div>';
    return;
  }

  // Calculate days
  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));

  // Update the display
  document.getElementById("days").textContent = days;
}

// Update countdown immediately when page loads
updateCountdown();

// Update countdown every minute
setInterval(updateCountdown, 60000);
