const boxesEl = document.querySelectorAll(".box");
const start = window.innerHeight * 4 / 5;

window.addEventListener("scroll", moveBoxes);
moveBoxes();

function moveBoxes() {
    
    boxesEl.forEach(box => {
        const boxTop = box.getBoundingClientRect().top;

        if(boxTop < start) {
            box.classList.add('show');
        } else {
            box.classList.remove('show');
        }
    })
}
