const head = document.querySelector(".head");
const contentList = document.querySelector(".contentList");
const bgColor = document.getElementById("bgColor");
const fontSize = document.querySelector("#font-size");
// const hindiline = document.querySelector(".idd");
const hindilinecolor = document.querySelector(".idd");
const textColor = document.querySelector("#textColor");

head.addEventListener("click", function(){

    if (contentList.style.display === "block"){
        contentList.style.display = "none";
    } else {
        contentList.style.display = "block";
    }

});

bgColor.addEventListener("input", function() {
  document.body.style.backgroundColor = bgColor.value;
});

fontSize.addEventListener("input", function() {
hindilinecolor.style.fontSize = fontSize.value + "px";
});

textColor.addEventListener("input", function() {
hindilinecolor.style.color = textColor.value ;
});

