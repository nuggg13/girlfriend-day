document.getElementById('surpriseButton').addEventListener('click', function() {
    document.getElementById('surpriseMessage').classList.toggle('hidden');
});

// Countdown Timer
function calculateTimeTogether() {
    const startDate = new Date("June 22, 2024 15:32:00").getTime();
    const now = new Date().getTime();
    const difference = now - startDate;

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    document.getElementById('countdown').innerHTML =
        days + " days " + hours + " hours " + minutes + " minutes " + seconds + " seconds";
}

setInterval(calculateTimeTogether, 1000);

// Play music on page load
window.addEventListener('load', function() {
    const music = document.getElementById('romanticMusic');
    music.play();
});
