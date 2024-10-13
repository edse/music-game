var levelMap = {
    "col-1": [],
    "col-2": [],
    "col-3": [],
    "col-4": [],
}

var col1PressStart = 0;
var col2PressStart = 0;
var col3PressStart = 0;
var col4PressStart = 0;

var video = document.getElementById("video");
var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");

function gameLoop(){
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    context.drawImage(video, 0, 0);
    if(!video.ended && !video.paused) {
        requestAnimationFrame(gameLoop);
    }
}

function playVideo(){
    document.getElementById("video").play()
    document.getElementById("play-button").classList.add("hidden");
    requestAnimationFrame(gameLoop);
}

function col1StartBlock(){
    document.getElementById("col-1").classList.add("col-1-selected");
    col1PressStart = video.currentTime
}

function col1EndBlock(){
    document.getElementById("col-1").classList.remove("col-1-selected");
    console.log(col1PressStart + " -> " + video.currentTime)
}

function col2StartBlock(){
    document.getElementById("col-2").classList.add("col-2-selected");
    col2PressStart = video.currentTime
}

function col2EndBlock(){
    document.getElementById("col-2").classList.remove("col-2-selected");
    console.log(col2PressStart + " -> " + video.currentTime)
}

function col3StartBlock(){
    document.getElementById("col-3").classList.add("col-3-selected");
    col3PressStart = video.currentTime
}

function col3EndBlock(){
    document.getElementById("col-3").classList.remove("col-3-selected");
    console.log(col3PressStart + " -> " + video.currentTime)
}

function col4StartBlock(){
    document.getElementById("col-4").classList.add("col-4-selected");
    col4PressStart = video.currentTime
}

function col4EndBlock(){
    document.getElementById("col-4").classList.remove("col-4-selected");
    console.log(col4PressStart + " -> " + video.currentTime)
}

function startBlock(e){
    if(e.key === "a") {
        col1StartBlock()
    }
    if(e.key === "s") {
        col2StartBlock()
    }
    if(e.key === "d") {
        col3StartBlock()
    }
    if(e.key === "f") {
        col4StartBlock()
    }
}

function endBlock(e){
    if(e.key === "a") {
        col1EndBlock()
    }
    if(e.key === "s") {
        col2EndBlock()
    }
    if(e.key === "d") {
        col3EndBlock()
    }
    if(e.key === "f") {
        col4EndBlock()
    }
}

document.addEventListener("DOMContentLoaded", function() {
    var video = document.getElementById("video");
    var canvas = document.getElementById("canvas");
    var context = canvas.getContext("2d");

    // key press
    document.addEventListener("keydown", startBlock);
    document.addEventListener("keyup", endBlock);

    // touch
    document.getElementById("col-1").addEventListener("touchstart", col1StartBlock);
    document.getElementById("col-1").addEventListener("touchend", col1EndBlock);
    document.getElementById("col-2").addEventListener("touchstart", col2StartBlock);
    document.getElementById("col-2").addEventListener("touchend", col2EndBlock);
    document.getElementById("col-3").addEventListener("touchstart", col3StartBlock);
    document.getElementById("col-3").addEventListener("touchend", col3EndBlock);
    document.getElementById("col-4").addEventListener("touchstart", col4StartBlock);
    document.getElementById("col-4").addEventListener("touchend", col4EndBlock);

    // click
    document.getElementById("play-button").addEventListener("click", playVideo);
});
