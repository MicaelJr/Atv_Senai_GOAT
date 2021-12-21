setInterval(()=> {
    animateCSS('#btnConselho', 'wobble');       
},3000)


window.addEventListener('load', function () {
    const API = 'https://api.adviceslip.com/advice';
    fetch(API)
    .then(resp => resp.json())
    .then(resp => resp.slip.advice)
    .then(conselhoGoat);

    
})


const conselhoGoat = (text) => {
    mostrarconselho.innerHTML = `<h4> "${text}" </h4>`
    //document.querySelector("#mostrarConselho").innerHTML = text;
}

