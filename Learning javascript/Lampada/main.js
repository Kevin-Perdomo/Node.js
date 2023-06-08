const on = document.getElementById("liga");
on.addEventListener("click", ligaai);

function ligaai(){
    const lampada = document.getElementById("lampada");
    if(lampada.getAttribute("src") == "img/ligada.jpg"){
        alert("Ja esta ligada seu devfobico");
    }else if(lampada.getAttribute("src") != "img/quebrada.jpg"){
        lampada.setAttribute("src", "img/ligada.jpg");
    }
}

const off = document.getElementById("desliga");
off.addEventListener("click", desligaai);

function desligaai(){
    const lampada = document.getElementById("lampada");
    if(lampada.getAttribute("src") == "img/desligada.jpg"){
        alert("Ja esta desligada seu devfobico");
    }else if(lampada.getAttribute("src") != "img/quebrada.jpg"){
        lampada.setAttribute("src", "img/desligada.jpg");
    }
}

const broke = document.getElementById("lampada");
broke.addEventListener("click", quebra);

let cont = 0;
function quebra(event) {
    console.log(cont);
    if(cont == 10){
        broke.setAttribute("src", "img/quebrada.jpg");
        document.getElementById("threat").innerHTML = "Olha a merda que voce fez seu devfobico ridiculo";
        document.getElementById("corpo").setAttribute("style", "background-color: red;");
    }
    cont ++;
}