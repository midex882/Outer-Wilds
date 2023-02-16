const array_islas = document.querySelectorAll(".island");
console.log(array_islas)



/*ELEGIMOS ISLA*/
let time = setInterval(
    ()=>{
        let numero = Math.floor(Math.random()*2);
        console.log(numero);
        const isla = array_islas[numero];
        console.log(isla);
        isla.classList.add("shoot");
        let wait = setTimeout(()=>{
            isla.classList.remove("shoot");
            isla.classList.add("return");
        },3100);
        let wait2 = setTimeout(()=>{
            isla.classList.remove("return");
        },6200);
    }
,10000);
