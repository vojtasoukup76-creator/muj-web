function vlocka() {
    var vlocka = document.getElementsByClassName("vlocka")[0]
    for (let index = 0; index < 10; index++) {
        const novaVlocka = vlocka.cloneNode();
document.body.appendChild(novaVlocka)
       novaVlocka.style.left = Math.random()* 100 + "vw"
       novaVlocka.style.animationDelay = Math.random()* 10 + "s"

        
    }
    
}
vlocka()