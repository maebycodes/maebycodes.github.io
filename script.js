function setRandomBackgroundColor() {
    // Generate random hue (0-360)
    const hue = Math.floor(Math.random() * 360);
    // Set saturation to 100% and lightness to 80%
    const color = `hsl(${hue}, 100%, 80%)`;
    document.body.style.backgroundColor = color;
}

// Run when page loads
// document.addEventListener('DOMContentLoaded', setRandomBackgroundColor); 