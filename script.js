let lamp = document.getElementById("lamp")
let btnlighton = document.getElementById("lighton")
let btnlightoff = document.getElementById("lightoff")

btnlighton.addEventListener('click' , () => {
    lamp.src =  "ligada.png";
});

btnlightoff.addEventListener('click' , () => {
    lamp.src = "desligada.png";
});