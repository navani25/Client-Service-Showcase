document.addEventListener('DOMContentLoaded', () => {
    // Get the canvas element and its 2D rendering context
    const canvas = document.getElementById('background-animation');
    if (!canvas) return; // Exit if canvas is not found
    
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Handle window resizing to keep the animation full-screen
    window.addEventListener('resize', () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    });

    // An array to store the points of the trail
    const trailPoints = [];
    const trailLength = 50; // Controls the length of the trail

    // The mouse's current position, starting in the center
    const mouse = {
        x: window.innerWidth / 2,
        y: window.innerHeight / 2,
    };

    // Variable to hold the background color for the fading effect
    let fadeColor;

    // Function to update the fade color based on the current theme
    function updateFadeColor() {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        if (currentTheme === 'light') {
            fadeColor = 'rgba(244, 244, 244, 0.1)'; // Light mode fade color
        } else {
            fadeColor = 'rgba(0, 0, 0, 0.1)'; // Dark mode fade color
        }
    }

    // Initialize the fade color on load
    updateFadeColor();

    // Observe changes to the data-theme attribute on the HTML element
    const themeObserver = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
            if (mutation.attributeName === 'data-theme') {
                updateFadeColor(); // Update color when theme changes
            }
        });
    });

    themeObserver.observe(document.documentElement, { attributes: true });

    // Update the mouse position whenever the cursor moves
    window.addEventListener('mousemove', (e) => {
        mouse.x = e.clientX;
        mouse.y = e.clientY;
    });

    // Initialize the trail points array
    for (let i = 0; i < trailLength; i++) {
        trailPoints.push({
            x: mouse.x,
            y: mouse.y,
        });
    }

    // The main animation loop that runs continuously
    function animate() {
        // Create a fading effect
        ctx.fillStyle = fadeColor;
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        // Move the head of the trail towards the mouse cursor
        const head = trailPoints[0];
        head.x += (mouse.x - head.x) * 0.15;
        head.y += (mouse.y - head.y) * 0.15;

        // Make each point in the trail follow the one in front of it
        for (let i = 1; i < trailPoints.length; i++) {
            const point = trailPoints[i];
            const prevPoint = trailPoints[i - 1];
            point.x += (prevPoint.x - point.x) * 0.3;
            point.y += (prevPoint.y - point.y) * 0.3;
        }

        // Draw each point of the trail onto the canvas
        for (let i = 0; i < trailPoints.length; i++) {
            const point = trailPoints[i];
            
            // UPDATED: Reduced the size multiplier from 0.25 to 0.15 for a thinner trail
            const size = (trailLength - i) * 0.15;
            const opacity = (trailLength - i) / trailLength * 0.7;

            ctx.beginPath();
            ctx.arc(point.x, point.y, size > 1 ? size : 1, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(229, 9, 20, ${opacity})`; 
            ctx.fill();
        }

        requestAnimationFrame(animate);
    }

    // Start the animation loop
    animate();
});