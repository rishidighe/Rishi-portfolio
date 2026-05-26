// Brutalist interactions

document.addEventListener('DOMContentLoaded', () => {
    // A sarcastic console log for anyone inspecting
    console.log("%cWhy are you looking in here? Hire me already.", "font-size: 20px; font-weight: bold; color: red;");

    // Add a simple click effect that inverts the whole page briefly for extra "brutalism"
    document.addEventListener('click', (e) => {
        // Don't invert on links
        if (e.target.tagName === 'A' || e.target.closest('a')) return;
        
        document.body.style.filter = 'invert(1)';
        setTimeout(() => {
            document.body.style.filter = 'none';
        }, 100);
    });
});
