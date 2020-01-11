/*----Menu switches----*/

//menu buttons
var breakfastButton = document.getElementById("breakfastButton");
var lunchButton = document.getElementById("lunchButton");
var dinnerButton = document.getElementById("dinnerButton");

//breakfast title and contents
var breakfastTitle = document.getElementById("breakfast_title");
var breakfastContent = document.getElementById("breakfast_content");

//lunch title and contents
var lunchTitle = document.getElementById("lunch_title");
var lunchContent = document.getElementById("lunch_content");

//dinner title and contents
var dinnerTitle = document.getElementById("dinner_title");
var dinnerContent = document.getElementById("dinner_content");


/*----hide and display menu event listeners----*/

//show breakfast
breakfastButton.addEventListener("click", function() {
    lunchTitle.style.display = "none";
    lunchContent.style.display = "none";
    dinnerTitle.style.display = "none";
    dinnerContent.style.display = "none";

    breakfastTitle.style.display = "inline-block";
    breakfastContent.style.display = "block";
})

//show lunch
lunchButton.addEventListener("click", function(){
    dinnerTitle.style.display = "none";
    dinnerContent.style.display = "none";
    breakfastTitle.style.display = "none";
    breakfastContent.style.display = "none";

    lunchTitle.style.display = "inline-block";
    lunchContent.style.display = "block"; 
})

//show dinner
dinnerButton.addEventListener("click", function() {
    lunchTitle.style.display = "none";
    lunchContent.style.display = "none";

    breakfastTitle.style.display = "none";
    breakfastContent.style.display = "none";

    dinnerTitle.style.display = "inline-block";
    dinnerContent.style.display = "block";
})
/*----hide and display menu event listeners----*/

/*----Menu switches----*/








