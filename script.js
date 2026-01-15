function vlocka() {
    var vlocka = document.getElementsByClassName("vlocka")[0]
var mnesic=new Date().getMonth();
    if (mnesic<1 || mnesic==11) {
        
        
        for (let index = 0; index < 10; index++) {
            const novaVlocka = vlocka.cloneNode();
            document.body.appendChild(novaVlocka)
            novaVlocka.style.left = Math.random()* 100 + "vw"
            novaVlocka.style.animationDelay = Math.random()* 10 + "s"
            
            
        }
        
    }else{
        vlocka.remove()
    }
}
vlocka()

let seznam = ["karta1.png","karta2.png", "karta3.png", "karta4.png"];
function animujobrazek(){
    let index = 1;

    setInterval(() => {
        let obrazek = document.getElementById("obrazek");
        index++;
        if(index >= seznam.length){
            index = 0
        }
        obrazek.classList.add("active");
        setTimeout(() => {
            
            obrazek.setAttribute("src",seznam[index]);
        }, 400);
        setTimeout(() => {
          obrazek.classList.remove("active");  
        }, 1000);
 },4000 );

         
}
animujobrazek()

