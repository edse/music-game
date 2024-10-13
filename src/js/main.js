
levelMap = {
    "col-1": [],
    "col-2": [],
    "col-3": [],
    "col-4": [],
}

col1PressStart = 0;
col2PressStart = 0;
col3PressStart = 0;
col4PressStart = 0;

playVideo = function(){
    document.getElementById("video").play()
    document.getElementById("play-button").classList.add("hidden");
}

document.addEventListener("keydown", function(e) {
    video = document.getElementById("video")
    if(e.key === "a") {
        document.getElementById("col-1").classList.add("col-1-selected");
        col1PressStart = video.currentTime
    }
    if(e.key === "s") {
        document.getElementById("col-2").classList.add("col-2-selected");
        col2PressStart = video.currentTime
    }
    if(e.key === "d") {
        document.getElementById("col-3").classList.add("col-3-selected");
        col3PressStart = video.currentTime
    }
    if(e.key === "f") {
        document.getElementById("col-4").classList.add("col-4-selected");
        col4PressStart = video.currentTime
    }
});

document.addEventListener("keyup", function(e) {
    console.log(e.key)
    if(e.key === "a") {
        document.getElementById("col-1").classList.remove("col-1-selected");
        console.log(col1PressStart + " -> " + video.currentTime)
    }
    if(e.key === "s") {
        document.getElementById("col-2").classList.remove("col-2-selected");
        console.log(col2PressStart + " -> " + video.currentTime)
    }
    if(e.key === "d") {
        document.getElementById("col-3").classList.remove("col-3-selected");
        console.log(col3PressStart + " -> " + video.currentTime)
    }
    if(e.key === "f") {
        document.getElementById("col-4").classList.remove("col-4-selected");
        console.log(col4PressStart + " -> " + video.currentTime)
    }
});

document.getElementById("play-button").addEventListener("click", playVideo);
