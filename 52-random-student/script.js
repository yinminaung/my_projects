const bodyEl = document.querySelector("body");
const rollEl = document.getElementById("roll");
const rollNumEl = document.getElementById("rollNum");

function searchRoll() {
    // loadding effect // 
    bodyEl.style.filter = "blur(10px)";
    setTimeout(stopLoading, 1500);

    // choose random number
    let rollNumber = Number.parseInt(Math.random() * 125 + 1);

    // make rollNumber beautiful
    if (rollNumber < 10) {
        rollNumber = "00" + rollNumber;
    } else if (rollNumber < 100) {
        rollNumber = "0" + rollNumber;
    } else {}
    
    rollNumEl.innerHTML = rollNumber;
    rollEl.style.visibility = "visible";

}

function stopLoading() {
    bodyEl.style.filter = "blur(0px)";
}