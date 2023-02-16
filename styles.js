"use strict"

const html = document;
const tutorial = document.getElementById("tutorial");

const campfire_ignite = new Audio("audio/spark.mp3");
const campfire_lit = new Audio("audio/campfire.mp3");
const silence = new Audio("audio/silence.mp3"); 

AOS.init();

html.addEventListener("click",
    ()=>
    {
        play_sounds();
    }
);

function play_sounds()
{
    setTimeout(()=>{
        tutorial.classList.add("show");
        play_sound("audio/spark.mp3");

    },1000)
}


function play_sound(sound)
{
    const audio = new Audio(sound);
    console.log
    audio.play();
}