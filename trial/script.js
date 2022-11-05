

function infoRender() {
const blockEl = document.querySelector("#block");
const infoEl = document.querySelector("#info");
const blockInfo = blockEl.getBoundingClientRect();
console.log(blockInfo)
infoEl.innerHTML  = '';
    for (const key in blockInfo) {
        if (typeof blockInfo[key] !== 'function') {
            let para = document.createElement('p');
            para.textContent = `${key} : ${blockInfo[key]}`;
            infoEl.appendChild(para);
        }
    }
}



window.addEventListener("scroll", infoRender);
infoRender();