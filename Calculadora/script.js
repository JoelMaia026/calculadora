
var btn = document.getElementsByClassName("btn-numero");
var input = document.getElementById("resultado");
var operadores = document.querySelectorAll(".btn-operador");
var num;
var sinal=["*","/","%","+","-"];
var result;
var rs;

for(var i =0;i<btn.length;i++){
    btn[i].addEventListener("click",capturarNumero)
}
for(var i =0;i<operadores.length;i++){
    operadores[i].addEventListener("click",capturarOperador)
}
function capturarNumero(){
     input.value += this.innerHTML;
     filtarInput();
    // alert(typeof(Number(this.innerHTML)))  
}
function capturarOperador(){
    input.value += this.innerHTML;
    filtarInput()
}
function limparTela(){
    input.value =null;
}
function calcular(){
    filtarInput()
    
    num = input.value;
    for(var x=0;x<num.length;x++){
        if(num[x]=="*"){
            rs = num.split("*")
            result  = Number(rs[0]) * Number(rs[1])
        }
        if(num[x]=="/"){
            rs = num.split("/")
            result  = Number(rs[0]) / Number(rs[1])
        }
        if(num[x]=="%"){
            rs = num.split("%")
            result  = Number(rs[0]) % Number(rs[1])
        }
        if(num[x]=="+"){
            rs = num.split("+")
            result  = Number(rs[0]) + Number(rs[1])
        }
        if(num[x]=="-"){
            rs = num.split("-")
            result  = Number(rs[0]) - Number(rs[1])
        }
       
    }
    limparTela()
    input.value = result;
}
function filtarInput(){
    if(input.value == "."){
        limparTela()
        return false;
    }
    if(input.value == "+" || input.value == "*" || input.value == "/" || input.value == "%"){
        limparTela()
    }
}


