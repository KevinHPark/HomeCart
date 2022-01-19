let indexValue = 0;
function carousel() {
    setTimeout(carousel, 10000);
    const img = document.querySelectorAll("img");
    for (let x = 0; x < img.length; x++) {
        img[x].style.display = "none";
    }
    indexValue++
    if (indexValue > img.length) { indexValue = 1 }
    //I genuinely dont know whats wrong with this code. but it doesnt work even if indexValue is undefined even tho it is....
    img[indexValue - 1].style.display = "block";
}
carousel();