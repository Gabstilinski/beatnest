document.addEventListener('DOMContentLoaded', () => {
    console.log('Welcome to BeatNest!');
});

function debounce(func, delay) {
    let timeout;
    return function() {
        clearTimeout(timeout);
        timeout = setTimeout(func, delay);
    };
}

document.getElementById("searchInput").addEventListener("input", debounce(function() {
    const filter = this.value.toLowerCase();
    const djCards = document.querySelectorAll(".dj-card");

    djCards.forEach(card => {
        const title = card.querySelector(".card-title").textContent.toLowerCase();
        card.style.display = title.includes(filter) ? "" : "none";
    });
}, 300)); 
