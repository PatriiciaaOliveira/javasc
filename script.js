

alert("Boas vindas ao jogo do número secreto"); //mensagem
let numeroMaximo = 5000;
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);
//let numeroSecreto = pareseInt(Math.rondom() * 100 + 1); //numero secreto aleatorio
//comando
console.log(numeroSecreto);
let chute;
let tentativas = 1;


//enquanto chute não for igual ao n.s
while (chute != numeroSecreto) {//!= -Diferente
    chute = prompt ("Escolha um número entre 1 a 100")
    //se chute for igual ao número secreto
    if(chute == numeroSecreto) { //para comparar  dois valores usa ==     
    } else {
        if (chute > numeroSecreto ){
            alert(`O numero secreto é menor que ${chute}`);
        }else{
            alert(`O numero secreto é maior que ${chute}`);
        }
        //tentativas = tentativas + 1;
        tentativas++;
    }
}
    let palavraTentativa = tentativas > 1? "tentativas" : "tentativa";
    alert(`Isso ai! Você decobriu o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}.`);

   
   // if (tentativas > 1) {
   //  alert(`Isso ai! Você decobriu o número secreto ${numeroSecreto} com ${tentativas} tentativas`);
    //}else{
       // alert(`Isso ai! Você decobriu o número secreto ${numeroSecreto} com ${tentativas} tentativa`);
   // }
   
