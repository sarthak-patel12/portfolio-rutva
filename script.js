// Handle Briefcase Opening Animation and PDF Display
function openBriefcase() {
    const briefcase = document.getElementById('briefcase');
    briefcase.classList.toggle('open');

    // Simulate briefcase opening with PDF display
    const modal = document.getElementById('pdf-modal');
    const iframe = document.getElementById('pdf-viewer');
    iframe.src = 'path-to-your-pdf.pdf'; // Replace with your actual PDF file path
    modal.style.display = 'flex';
}

// Close the PDF Modal
function closePDF() {
    const modal = document.getElementById('pdf-modal');
    modal.style.display = 'none';
    const iframe = document.getElementById('pdf-viewer');
    iframe.src = ''; // Clear the PDF source to stop loading
}

// Handle Parallax Scrolling Effect
window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;
    const objects = document.querySelectorAll('.space-object');

    objects.forEach((object, index) => {
        // Slightly change the transform based on the scroll position for each object
        const movement = scrollPosition * (0.1 + index * 0.02);
        object.style.transform = `translateY(${movement}px)`;
    });
});
