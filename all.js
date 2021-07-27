
let imgList = ['images/Interior/室內01新北新莊-Doffee咖啡廳/7.JPG', 'images/Interior/室內02桃園八德-謝宅/客廳-完稿.png', 'img3']
let imgName = ['新北新莊-Doffee咖啡廳', '桃園八德-謝宅', '']
let accordion = document.getElementsByClassName("accordion");
let item = document.querySelectorAll(".item")

//accordion
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



// for (let i = 0; i < item.length; i++) {
//     item[i].innerHTML = `<a href="${imgName[i]}.html"><img src="${imgList[i]}" alt="X" />
//     <span class="fz-14">${imgName[i]}</span>
// </a><`;
// }


//requiring path and fs modules
const path = require('path');
const fs = require('fs');
//joining path of directory 
const directoryPath = path.join(__dirname, 'images');
//passsing directoryPath and callback function
fs.readdir(directoryPath, function (err, files) {
    //handling error
    if (err) {
        return console.log('Unable to scan directory: ' + err);
    }
    //listing all files using forEach
    files.forEach(function (file) {
        // Do whatever you want to do with the file
        console.log(file);
    });
});