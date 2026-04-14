const cards = document.querySelectorAll('.card');

export function handleParallax() {
    const viewportCenter = window.innerHeight * 0.5;

    cards.forEach((card, index) => {
        const rect = card.getBoundingClientRect();
        const cardCenter = rect.top + rect.height / 2;

        let distanceFromCenter = cardCenter - viewportCenter;

        const parallaxLevel = parseFloat(card.dataset.parallax) || 0;

        let moveY = 0.2;
        if (parallaxLevel > 0) {
            moveY = distanceFromCenter * -0.05 * parallaxLevel;
        }

        card.style.transform = `
        translateX(${card.dataset.baseX || 0}px) 
        translateY(${moveY}px)
    `;
    });
}
