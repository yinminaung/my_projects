const bgEl = document.querySelector('#bg');
const loadingEl = document.querySelector('#loading');

let load = 0;

let run = setInterval(blurring, 30);

function blurring() {
    load++;
    if (load > 99) {
        clearInterval(run);
    }
    loadingEl.innerHTML = load + "%";
    loadingEl.style.opacity = scale(load, 0, 100, 1, 0);
    bgEl.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`
}

const scale = (num, in_min, in_max, out_min, out_max) => {
    return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}

