//Definir variável caixa
let caixa = document.getElementById('caixa');

// Adicionar eventos com o mouse na variável caixa(Ativa quando o usuário clicar dentro da div)
caixa.addEventListener('click', clicar);
caixa.addEventListener('mouseenter', entrar);
caixa.addEventListener('mouseout', sair);

// Criar função da variável clicar
function clicar() {
    caixa.innerHTML = 'Você clicou';
    caixa.style.background = 'red';
    caixa.style.color = 'white';
}


// Criar função da variável entrar (Ativa quando o mouse passar dentro da div)
function entrar (){
    caixa.innerHTML = 'Entrou';
    caixa.style.background = 'yellow';
    caixa.style.color = 'black'
}

// Criar função da variável sair (Ativa quando tirar o mouse dentro da div)
function sair (){
    caixa.innerHTML = 'Passe o mouse'
    caixa.style.background = 'green'
    caixa.style.color = 'white'
}

// Pegar a data atual do computador
let agora = new Date();
let diaSemana = agora.getDay();
let data = document.getElementById('data');

// switch(diaSemana){
//     case 0:
//         data.innerHTML = 'Domingo';
//         data.style.background = 'yellow'
//     break;

//     case 1:
//         data.innerHTML = 'Segunda-feira';
//         data.style.background = 'black'
//     break;

//     case 2:
//         data.innerHTML = 'Terça-feira';
//         data.style.background = 'green'
//     break;

//     case 3:
//         data.innerHTML = 'Quarta-feira';
//         data.style.background = 'red'
//     break;

//     case 4:
//         data.innerHTML = 'Quinta-feira';
//         data.style.background = 'pink'
//     break;

//     case 5:
//         data.innerHTML = 'Sexta-feira';
//         data.style.background = 'blue'
//     break;

//     case 6:
//         data.innerHTML = 'Sábado';
//         data.style.background = 'gray'
//     break;

//     default:
//         data.innerHTML = 'Dia inválido';
//         data.style.background = 'purple'
//     break;
// }

if(diaSemana == 0){
    data.innerHTML = ('Domingo');
    data.style.background = ('black');

} 
else if(diaSemana == 1){
    data.innerHTML = ('Segunda-feira');
    data.style.background = ('blue');
} 
else if(diaSemana == 2){
    data.innerHTML = ('Terça-feira');
    data.style.background = ('red');
} 
else if(diaSemana == 3){
    data.innerHTML = ('Quarta-feira');
    data.style.background = ('yellow');
} 
else if(diaSemana == 4){
    data.innerHTML = ('Quinta-feira');
    data.style.background = ('pink');
} 
else if(diaSemana == 5){
    data.innerHTML = ('Sexta-feira');
    data.style.background = ('purple');
} 
else if(diaSemana == 6){
    data.innerHTML = ('Sábado');
    data.style.background = ('green');
} else {
    data.innerHTML = ('Data inválida');
    data.style.background = ('white');
    data.style.color = ('black');
}

let contador = 0;
let contando = document.getElementById('contador');

while(contador < 300){
    contador++;
    contando.innerHTML = (contador);
    contando.style.background = ('blue');

}