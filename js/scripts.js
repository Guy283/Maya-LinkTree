var copied = "הועתק ללוח";
function copyIherb() {
    navigator.clipboard.writeText("BGG7944")
    var copiedIherb = document.querySelector(".clickIherb")
    copiedIherb.innerHTML = copied;
    copiedIherb.classList.add("copied");


}

function copyYesStyle() {
    navigator.clipboard.writeText("YESMAYA34")
    var copiedYesStyle = document.querySelector(".clickYesStyle")
    copiedYesStyle.innerHTML = copied;
    copiedYesStyle.classList.add("copied");
}

function copyFeelUnique() {
    navigator.clipboard.writeText("HANNA MAYA")
    var copiedFeelUnique = document.querySelector(".clickFeelUnique")
    copiedFeelUnique.innerHTML = copied;
    copiedFeelUnique.classList.add("copied");
}

function copyLookFantastic() {
    navigator.clipboard.writeText("MAYA-R1WR")
    var copiedLookFantastic = document.querySelector(".clickLookFantastic")
    copiedLookFantastic.innerHTML = copied;
    copiedLookFantastic.classList.add("copied");
}

