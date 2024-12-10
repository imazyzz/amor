function updateCounter() {
    const startDate = new Date("2024-10-27T00:00:00");

    const now = new Date();

    const startDateLocal = new Date(
        startDate.getFullYear(),
        startDate.getMonth(),
        startDate.getDate()
    );
    const nowLocal = new Date(now.getFullYear(), now.getMonth(), now.getDate());

    const diffInMilliseconds = nowLocal - startDateLocal;

    const daysElapsed = Math.floor(diffInMilliseconds / (1000 * 60 * 60 * 24));

    document.getElementById("day-counter").textContent = daysElapsed;
}

updateCounter();

setInterval(updateCounter, 24 * 60 * 60 * 1000);
