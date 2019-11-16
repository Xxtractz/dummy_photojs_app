/**
 * I'm Declaring video variable so that i can access->
 * <video id="video" autoplay></video>
 * in my html file (index.html)
 * document.getElemtentById("video") gets the id="video" on html
 */
const video = document.getElementById("video");

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

/**
 * 
 */
const _navigate = navigator.mediaDevices;

 if (_navigate && _navigate.getUserMedia()) {
     _navigate.getUserMedia({video : true}).then(function (stream){
         video.srcObject = stream;
     })
 }

function Snap(){
    
}