// Set the target date and time (September 27, 2024, 6:30 PM)
const targetDate = new Date('2024-09-27T18:30:00');

// Countdown Element
const countdownElement = document.getElementById('countdown');

// Check if the current time is before or after the target date
const now = new Date();

// Check if we're still before the target date
if (now.getTime() < targetDate.getTime()) {
    // If it's before the target time, set the countdown in localStorage
    localStorage.setItem('countdownEndTime', targetDate.getTime());
} else {
    // If it's after 6:30 PM, display "PENDING"
    countdownElement.innerHTML = 'PENDING';
}

// Get the stored end time (which is the target date for the countdown)
let storedEndTime = localStorage.getItem('countdownEndTime');
storedEndTime = parseInt(storedEndTime);

// Update Countdown Function
function updateCountdown() {
    const now = new Date();
    const timeRemaining = storedEndTime - now.getTime();

    // If the countdown is finished, show "PENDING"
    if (timeRemaining <= 0) {
        countdownElement.innerHTML = 'PENDING';
        clearInterval(countdownInterval); // Stop further updates
        return;
    }

    // Calculate days, hours, minutes, seconds
    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    // Display the countdown
    countdownElement.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
}

// Start the countdown interval if before the target time
if (now.getTime() < targetDate.getTime()) {
    const countdownInterval = setInterval(updateCountdown, 1000);
    updateCountdown(); // Initial call to display immediately
}

// Create animated bubbles
function createBubble() {
    const bubble = document.createElement('div');
    const size = Math.random() * 60 + 40 + 'px';
    bubble.classList.add('bubble');
    bubble.style.width = size;
    bubble.style.height = size;
    bubble.style.left = Math.random() * 100 + 'vw';
    bubble.style.animationDuration = Math.random() * 5 + 10 + 's';

    document.querySelector('.bubble-container').appendChild(bubble);

    setTimeout(() => {
        bubble.remove();
    }, 15000);
}

setInterval(createBubble, 800); // Bubbles appear every 800ms
