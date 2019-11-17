/**
 * I'm Declaring video variable so that i can access->
 * <video id="video" autoplay></video>
 * in my html file (index.html)
 * document.getElemtentById("video") gets the id="video" on html
 */
const video = document.getElementById("video");

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const capture_btn = document.getElementById("capture_btn");

const stickers = document.getElementById("stickers");


stickers.style.visibility = "hidden";
/**
 * 
 */
const _navigate = navigator.mediaDevices;

 if (_navigate && _navigate.getUserMedia) {
     _navigate.getUserMedia({video : true}).then(function (stream){
         video.srcObject = stream;
     })
 }

function Snap(){
    ctx.drawImage(video,0,0,400,300);
    stickers.style.visibility = "visible";
    video.style.display = "none";
    capture_btn.style.display ="none"
}

function addSticker(string){
    var img = document.getElementById(string);

    ctx.drawImage(img, 20, 0 ,100,70);
}

function clear(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}