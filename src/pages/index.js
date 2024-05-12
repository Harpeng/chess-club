import './index.css';

const scrollers = document.querySelector('.runline');

if(!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    addAnimation();
}

function addAnimation () {
    const scroller = scrollers;
    scroller.setAttribute("data-animated", true);

    const scrollerList = scroller.querySelector('.runline__list');
    const scrollerContent = Array.from(scrollerList.children);

    scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        duplicatedItem.setAttribute("aria-hidden", true);
        scrollerList.appendChild(duplicatedItem )
    })
}