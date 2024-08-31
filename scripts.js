// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Filter/Search Functionality (Example)
const searchInput = document.getElementById('search-input');
const mentorCards = document.querySelectorAll('.mentor-card');

searchInput.addEventListener('input', function() {
    const searchValue = searchInput.value.toLowerCase();
    mentorCards.forEach(card => {
        const mentorName = card.querySelector('h3').innerText.toLowerCase();
        if (mentorName.includes(searchValue)) {
            card.style.display = '';
        } else {
            card.style.display = 'none';
        }
    });
});