let accordion = document.getElementsByClassName("accordion");

//accordion
for (let i = 0; i < accordion.length; i++) {
    accordion[i].addEventListener("mouseover", function () {
        let panel = this.parentNode.nextElementSibling;
        let mark = this.children;
        if (panel.style.maxHeight) {
            mark[0].classList.remove("fa-minus")
            mark[0].classList.add("fa-plus")
            panel.style.maxHeight = null;
        } else {
            mark[0].classList.remove("fa-plus")
            mark[0].classList.add("fa-minus")
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    });
}

let x = document.querySelector(".m-nav");
let m_panel = document.querySelector(".m-panel");

//mobile-header
function myFunction() {

    if (x.style.height === "0px") {
        x.style.height = "auto";
    } else {
        x.style.height = "0px";
    }
    if (m_panel.style.height === "0px") {
        m_panel.style.height = "auto";
    } else {
        m_panel.style.height = "0px";
    }
}