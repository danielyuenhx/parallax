const div_1 = document.getElementById("div-1");
const div_2 = document.getElementById("div-2");
const div_3 = document.getElementById("div-3");
const div_4 = document.getElementById("div-4");

const link_1 = document.getElementById("link-1");
const link_2 = document.getElementById("link-2");
const link_3 = document.getElementById("link-3");
const link_4 = document.getElementById("link-4");


window.addEventListener("scroll", function() {
    let offset = window.pageYOffset;
    div_1.style.backgroundPositionY = offset * 0.8 + "px";
    console.log(offset);
    console.log(div_1.offsetHeight);
    console.log(div_2.offsetHeight);

    if (offset < div_1.offsetHeight - 75) {
        document.getElementsByClassName("active")[0].classList.remove("active");
        link_1.classList.add("active");
    }
    else if (offset < div_1.offsetHeight+div_2.offsetHeight - 75) {
        document.getElementsByClassName("active")[0].classList.remove("active");
        link_2.classList.add("active");
    }
    else if (offset < div_1.offsetHeight+div_2.offsetHeight+div_3.offsetHeight - 75) {
        document.getElementsByClassName("active")[0].classList.remove("active");
        link_3.classList.add("active");
    }
    else if (offset < div_1.offsetHeight+div_2.offsetHeight+div_3.offsetHeight+div_4.offsetHeight - 75) {
        document.getElementsByClassName("active")[0].classList.remove("active");
        link_4.classList.add("active");
    }

});