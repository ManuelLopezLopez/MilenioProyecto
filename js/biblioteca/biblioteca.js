document.getElementsByClassName("vimeoImage")[0].addEventListener("click", function(){
document.getElementsByClassName("vimeoVideo")[0].src = "https://player.vimeo.com/video/126696386?title=0&byline=0&portrait=0&player_id=vimeography686166&api=1&app_id=122963";
document.getElementsByClassName("vimeoImage")[0].classList.add("imgSelected");
document.getElementsByClassName("vimeoImage")[1].classList.remove("imgSelected");
});

document.getElementsByClassName("vimeoImage")[1].addEventListener("click", function(){
    document.getElementsByClassName("vimeoVideo")[0].src = "https://player.vimeo.com/video/126217644?title=0&byline=0&portrait=0&player_id=vimeography958835&api=1&app_id=122963";
    document.getElementsByClassName("vimeoImage")[1].classList.add("imgSelected");
    document.getElementsByClassName("vimeoImage")[0].classList.remove("imgSelected");
});