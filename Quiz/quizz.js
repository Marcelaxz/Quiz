var pontos = 0;
function validarQ1 (){
    var a = document.getElementById('op1').checked;
    var b = document.getElementById('op2').checked;
    var c = document.getElementById('op3').checked;
    var d = document.getElementById('op4').checked;
    if (((a == true &&
           b == false &&
           c == false &&
           d == false))){
               pontos = pontos + 1;;
           }
    else {
        pontos = pontos;
    }  
}
function validarQ2 () {
    var a2 = document.getElementById('op21').checked;
    var b2 = document.getElementById('op22').checked;
    var c2 = document.getElementById('op23').checked;
    var d2 = document.getElementById('op24').checked;
    if (((a2 == false &&
           b2 == false &&
           c2 == true &&
           d2 == false))){
               pontos = pontos + 1;
           }
    else {
        pontos = pontos;
    } 
}

function validarQ3 () {
    var a3 = document.getElementById('op31').checked;
    var b3 = document.getElementById('op32').checked;
    var c3 = document.getElementById('op33').checked;
    var d3 = document.getElementById('op34').checked;
    if (((a3 == false &&
           b3 == true &&
           c3 == false &&
           d3 == false))){
               pontos = pontos + 1;
           }
    else {
        pontos = pontos;
    }  
}

function validarQ4 () {
    var a4 = document.getElementById('op41').checked;
    var b4 = document.getElementById('op42').checked;
    var c4 = document.getElementById('op43').checked;
    var d4 = document.getElementById('op44').checked;
    if (((a4 == true &&
           b4 == false &&
           c4 == false &&
           d4 == false))){
               pontos = pontos + 1;
           }
    else {
        pontos = pontos;
    }  
}

function validarQ5 () {
    var a5 = document.getElementById('op51').checked;
    var b5 = document.getElementById('op52').checked;
    var c5 = document.getElementById('op53').checked;
    var d5 = document.getElementById('op54').checked;
    if (((a5 == true &&
           b5 == false &&
           c5 == false &&
           d5 == false))){
               pontos = pontos + 1;
           }
    else {
        pontos = pontos;
    }  
}

function validar(){
    validarQ1();
    validarQ2();
    validarQ3();
    validarQ4();
    validarQ5();
    if(pontos==5){
        alert(pontos);
        window.location.href = "https://moodle.mackenzie.br/moodle/";
    }
    else if(pontos>=3 && pontos<5){
        alert(pontos)
        window.location.href = "https://www.google.com/webhp?hl=pt-BR&sa=X&ved=0ahUKEwifz8b2_OLkAhXFKrkGHT0ZAxwQPAgH";
    }
    else{
        alert(pontos);
        window.location.href="https://www.youtube.com/";
    }
}





    
