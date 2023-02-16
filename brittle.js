"use strict"
/*ESTE SCRIPT REPOSICIONA CONTENEDORES*/
const sections = document.querySelectorAll("section");
const brittle_main = document.querySelector("main");
const quantum_shard = document.querySelector(".quantumShard");

/*ALTURA TOTAL DE CADA CONTENEDOR*/
const altura = 50;
/*---------------------*/
let margen = 80;
let contador = 0;
let array = [];
sections.forEach((element)=>{
    const section = element.getBoundingClientRect();
    array.push(`${contador*altura+margen}vh`);
    contador++;
});

let activo;

if(window.innerWidth < 1000)
    {
        activo = false;
    }else{
        activo = true;

    }

addEventListener("resize",()=>{
    if(window.innerWidth < 1000)
    {
        activo = false;
        console.log("animacion interrumpida");
    }else{
        activo = true;
        console.log("animacion permitida");
    }
});

brittle_main.style.height = `${array.length * altura + margen}vh`;
/*
POSICIONES INICIALES SIN TRANSITION
*/
let index = 0;
sections.forEach((section)=>
        {   
            section.style.transition = "none";
            section.style.transform = `translateY(${array[index]})`;
            console.log(`poniendo contenedor en: ${array[index]}`)
            index++;    
        });
        console.log("========================");

/* DEVOLVEMOS EL TRANSITION */    
let wait = setTimeout(()=>{sections.forEach((section)=>{section.style.transition = "transform 5s linear"})},5500)
if(!activo)
{
    sections.forEach((section)=>
{   
    section.style.transition = "transform 5s linear";
    section.style.transform = `none`;
    console.log(`moviendo contenedor a: ${array[index]}`)
    index++;    
});
}


    let time = setInterval(
        ()=>{
            if(activo)
            {
                shuffleArray(array);
                let index = 0;
                sections.forEach((section)=>
                {   
                    section.style.transition = "transform 5s linear";
                    section.style.transform = `translateY(${array[index]})`;
                    console.log(`moviendo contenedor a: ${array[index]}`)
                    index++;    
                });
                console.log("========================");

            }else{
                sections.forEach((section)=>
                {   
                    section.style.transition = "transform 5s linear";
                    section.style.transform = `none`;
                    console.log(`moviendo contenedor a: ${array[index]}`)
                    index++;    
                });
            }
        }
    ,25000);



function shuffleArray(array)
{
    array.sort((a, b) => 0.5 - Math.random());
}

document.addEventListener("scroll",
()=>{
        if(!isInViewport(quantum_shard, "40vh"))
        {
            let col = Math.floor(Math.random()*4+1);        
            let fin = col +1; 
            while(quantum_shard.style.gridColumn === `${col}/${fin}`)
            {
                let col = Math.floor(Math.random()*4+1);        
                let fin = col +1; 
            }
            quantum_shard.style.gridColumn = `${col}/${fin}`;
            console.log("quantum warp")
        }

});

function isvisible(obj) {
     return obj.offsetWidth > 0 && obj.offsetHeight > 0;
  }

function isInViewport(element, height) {
const rect = element.getBoundingClientRect();
return (
    rect.top >= -400 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight + 400 || document.documentElement.clientHeight + 400) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
);
}