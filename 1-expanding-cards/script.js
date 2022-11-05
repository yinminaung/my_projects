const panelEls = document.querySelectorAll(".panel");

panelEls.forEach(panelEl => {
    panelEl.addEventListener("click", () => {
        removeActiveClass();
        panelEl.classList.add("active");
    })
})

function removeActiveClass() {
    panelEls.forEach(panelEl => {
        panelEl.classList.remove('active');
    })
}