// Random quotes generator
const quotes = [
    "Patience is not passive; it is concentrated strength.",
    "Something big is on the horizon. Stay tuned.",
    "Great things take time, and they're worth the wait.",
    "Warming up something beautiful, please be patient.",
    "Excitement is brewing in the shadows.",
    "Good things come to those who wait, just hold on."
];

function randomQuote() {
    const quote = quotes[Math.floor(Math.random() * quotes.length)];
    document.getElementById("quote").textContent = quote;
}

// Countdown Timer (set the countdown to 20 days from now)
const currentDate = new Date();
const launchDate = new Date(currentDate.getTime() + 20 * 24 * 60 * 60 * 1000); // 20 days from now

function updateCountdown() {
    const now = new Date().getTime();
    const distance = launchDate.getTime() - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));

    document.getElementById("countdown").textContent = `Coming in ${days} days`;

    // If the countdown is finished, display a message
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("countdown").textContent = "We're Live!";
    }
}

randomQuote(); // Call the random quote on page load

// Update countdown every second
const x = setInterval(updateCountdown, 1000);
