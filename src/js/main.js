var levelMap = {
    "col-1": [],
    "col-2": [],
    "col-3": [],
    "col-4": [],
}

var col1PressStartTime = 0;
var col2PressStartTime = 0;
var col3PressStartTime = 0;
var col4PressStartTime = 0;

var col1PressStartPosition = 0;
var col2PressStartPosition = 0;
var col3PressStartPosition = 0;
var col4PressStartPosition = 0;

var col1Block = null;
var col2Block = null;
var col3Block = null;
var col4Block = null;

var secondsPassed;
var oldTimeStamp;
var fps;

var step = 7;
var recordedmiddleOfScreen = 504;
var vw = 0;
var vh = 0;

var currentPosition = 0;
var blockInitialHeight = 150;
var middleOfScreen = 0;
var timelineWidth = 0;
var videoDuration = 0;

var video = null;

function init() {
    video = document.getElementById("video");
    pauseVideo();

    videoDuration = video.duration;

    var c = window.getComputedStyle(document.getElementById("vwvh"));
    vw = Math.round(String(c.width).replace("px", ""));
    vh = Math.round(String(c.height).replace("px", ""));

    var c = window.getComputedStyle(document.getElementById("timeline"));
    timelineWidth = Math.round(String(c.width).replace("px", ""));

    var c = window.getComputedStyle(document.querySelectorAll("#line")[0]);
    middleOfScreen = Math.round(String(c.top).replace("px", ""));

    offset = recordedmiddleOfScreen - middleOfScreen;
    currentPosition = currentPosition - offset;
    recordedmiddleOfScreen = middleOfScreen;

    document.getElementById("map").style.transform = "translateY(" + (currentPosition) + "px)";
}

function showFps(timestamp) {
    secondsPassed = (timestamp - oldTimeStamp) / 1000;
    oldTimeStamp = timestamp;
    fps = Math.round(1 / secondsPassed);
    document.getElementById("fps").innerText = fps + " fps"
}

function updatePlayhead() {
    p = (100 * video.currentTime) / videoDuration;
    x = ((timelineWidth / 100) * p) - (0.75 * vw);
    document.getElementById("playhead").style.transform = `translate(${x}px, -35%)`;
}

function gameLoop(timestamp) {
    showFps(timestamp);
    updatePlayhead();

    currentPosition = currentPosition + step;
    document.getElementById("map").style.transform = "translateY(" + currentPosition + "px)";

    resizeBlocks();

    if (!video.ended && !video.paused) {
        requestAnimationFrame(gameLoop);
    } else {
        cancelAnimationFrame(gameLoop);
    }
}

function playVideo() {
    video.play()
    document.getElementById("play-button").classList.add("hidden");
    requestAnimationFrame(gameLoop);
}

function pauseVideo() {
    video.pause();
    cancelAnimationFrame(gameLoop);
}

function createBlock(col) {
    var block = document.createElement('div');
    block.classList.add("block");
    block.classList.add("player-block");
    block.classList.add(`block-col-${col}`);  
    block.style.bottom = Math.round(currentPosition - middleOfScreen - (blockInitialHeight / 2)) + "px"
    document.getElementById("map").appendChild(block);

    switch (col) {
        case 1:
            col1Block = block;
            break;
        case 2:
            col2Block = block;
            break;
        case 3:
            col3Block = block;
            break;
        case 4:
            col4Block = block;
            break;
    }
}

function resizeBlocks() {
    if (col1PressStartPosition !== 0 && col1Block) {
        if (typeof (col1Block) === "object") {
            var h = Math.round(currentPosition - col1PressStartPosition) + blockInitialHeight;
            col1Block.style.height = h + "px";
        }
    }
    if (col2PressStartPosition !== 0 && col2Block) {
        if (typeof (col2Block) === "object") {
            var h = Math.round(currentPosition - col2PressStartPosition) + blockInitialHeight;
            col2Block.style.height = h + "px";
        }
    }
    if (col3PressStartPosition !== 0 && col3Block) {
        if (typeof (col3Block) === "object") {
            var h = Math.round(currentPosition - col3PressStartPosition) + blockInitialHeight;
            col3Block.style.height = h + "px";
        }
    }
    if (col4PressStartPosition !== 0 && col4Block) {
        if (typeof (col4Block) === "object") {
            var h = Math.round(currentPosition - col4PressStartPosition) + blockInitialHeight;
            col4Block.style.height = h + "px";
        }
    }
}

function col1StartBlock() {
    document.getElementById("col-1").classList.add("col-1-selected");
    col1PressStartTime = video.currentTime;
    col1PressStartPosition = currentPosition;
    createBlock(1);
}

function col1EndBlock() {
    document.getElementById("col-1").classList.remove("col-1-selected");
    // console.log(col1PressStartTime + " -> " + video.currentTime)
    col1PressStartPosition = 0
}

function col2StartBlock() {
    document.getElementById("col-2").classList.add("col-2-selected");
    col2PressStartTime = video.currentTime
    col2PressStartPosition = currentPosition
    createBlock(2);
}

function col2EndBlock() {
    document.getElementById("col-2").classList.remove("col-2-selected");
    console.log(col2PressStartTime + " -> " + video.currentTime)
    col2PressStartPosition = 0
}

function col3StartBlock() {
    document.getElementById("col-3").classList.add("col-3-selected");
    col3PressStartTime = video.currentTime
    col3PressStartPosition = currentPosition
    createBlock(3);
}

function col3EndBlock() {
    document.getElementById("col-3").classList.remove("col-3-selected");
    console.log(col3PressStartTime + " -> " + video.currentTime)
    col3PressStartPosition = 0
}

function col4StartBlock() {
    document.getElementById("col-4").classList.add("col-4-selected");
    col4PressStartTime = video.currentTime
    col4PressStartPosition = currentPosition
    createBlock(4);
}

function col4EndBlock() {
    document.getElementById("col-4").classList.remove("col-4-selected");
    // console.log(col4PressStartTime + " -> " + video.currentTime)
    col4PressStartPosition = 0
}

function startBlock(e) {
    if (e.repeat) {
        return;
    }
    switch (e.key.toLowerCase()) {
        case "a":
            col1StartBlock();
            break;
        case "s":
            col2StartBlock();
            break;
        case "d":
            col3StartBlock();
            break;
        case "f":
            col4StartBlock();
            break;
        case " ":
            if (video.ended || video.paused) {
                playVideo();
            } else {
                pauseVideo();
            }
            break;
    }
}

function endBlock(e) {
    if (e.key.toLowerCase() === "a") {
        col1EndBlock()
    }
    if (e.key.toLowerCase() === "s") {
        col2EndBlock()
    }
    if (e.key.toLowerCase() === "d") {
        col3EndBlock()
    }
    if (e.key.toLowerCase() === "f") {
        col4EndBlock()
    }
}

window.onload = function() {
    init();

    // key press
    window.addEventListener("keydown", startBlock);
    window.addEventListener("keyup", endBlock);

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

    // resize
    window.addEventListener('resize', init, false);
    window.addEventListener('orientationchange', init, false);
}
