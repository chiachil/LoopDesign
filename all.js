//accordion
let accordion = document.getElementsByClassName("accordion");
let i;

for (i = 0; i < accordion.length; i++) {
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