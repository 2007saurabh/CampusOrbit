document.addEventListener("DOMContentLoaded", () => {
    // 1. CAROUSEL LOGIC
    const carousel = document.getElementById('eventCarousel');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');

    const scrollAmount = 320; // Width of card + gap

    if (nextBtn && prevBtn) {
        nextBtn.addEventListener('click', () => {
            carousel.scrollBy({ top: 0, left: scrollAmount, behavior: 'smooth' });
        });

        prevBtn.addEventListener('click', () => {
            carousel.scrollBy({ top: 0, left: -scrollAmount, behavior: 'smooth' });
        });
    }

    // 2. MODAL LOGIC (For Admin/Moderator to Create Events)
    const modal = document.getElementById('createEventModal');
    const form = document.getElementById('createEventForm');

    // Open Modal Function (Called from the Navbar button)
    window.openCreateEventModal = () => {
        modal.style.display = 'flex';
    };

    // Close Modal Function
    window.closeCreateEventModal = () => {
        modal.style.display = 'none';
    };

    // Close modal if user clicks outside the white box
    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeCreateEventModal();
        }
    });

    // Handle Form Submission (Frontend logic only for now)
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        alert("Event Published Successfully! (Note: Connect this to backend later)");
        closeCreateEventModal();
    });
});