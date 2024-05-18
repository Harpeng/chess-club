export default class Runline {
    constructor() {
        this.scrollers = document.querySelectorAll('.runline');
    }

    addAnimation() {
        this.scrollers.forEach((scroller) => {
            scroller.setAttribute("data-animated", true);
    
            const scrollerList = scroller.querySelector(".runline__list");
            const scrollerContent = Array.from(scrollerList.children);
    
            scrollerContent.forEach((item) => {
                const duplicatedItem = item.cloneNode(true);
                duplicatedItem.setAttribute("aria-hidden", true);
                scrollerList.appendChild(duplicatedItem);
            })
            
        })
    }
}