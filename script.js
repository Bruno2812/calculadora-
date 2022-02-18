const tiposOp = { // estamos criando um emnumeramento para os nossos radios
    Multiplicar: "0",
    Soma: "1",
    Subtracao: "2",
    Dividir: "3"
 };
 Object.freeze(tiposOp); // não deixa adicionarmos mais elementos nessa lista pelo codigo 
 
 function Calcular(){
   let n1 = parseInt(document.getElementById("nu1").value)
   let n2 = parseInt(document.getElementById("nu2").value)
   let res = document.getElementById("res")
   
   let radios = document.getElementsByName('fav_language');
   let valueFind = "";
    for (var radio of radios){
        if (radio.checked){
             valueFind = radio.value;
             break;
        }
    }
   
   if(valueFind == ""){
       alert("Nao marcou nenhum op");
       return;
    }
   
   let Result = 0;
   switch(valueFind){
     case tiposOp.Multiplicar:
       Result = n1 * n2;
       break;
     case tiposOp.Soma:
       Result = n1 + n2;
       break;
     case tiposOp.Subtracao:
       Result = n1 - n2;
       break;
     case tiposOp.Dividir:
       Result = n1 / n2;
       break;
     default:
     break
   }
   res.innerHTML = `Seu resultado é ${Result}`
 }