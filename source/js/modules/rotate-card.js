const cardInfo = document.querySelector('.card--info');
const image = cardInfo.querySelector('.card__picture img');
const viewportCenter = window.innerHeight / 2;

let ticking = false;
export const rotateCard = () => {
    if (!ticking) {
        window.requestAnimationFrame(() => {
            const rect = cardInfo.getBoundingClientRect();
            const cardCenter = rect.top + rect.height / 2;
            const distanceFromCenter = cardCenter - viewportCenter;

            let rotationDegree = distanceFromCenter * 0.1;
            image.style.transform = `rotate(${-rotationDegree}deg)`;

            ticking = false;
        });
        ticking = true;
    }
}
