function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

/* 
Exercício 1:

O array dezDaysList contém os dois últimos dias de novembro e os dias do mês de dezembro. Desenvolva uma função que crie dinamicamente cada dia do calendário e os adicione como filhos/filhas da tag <ul> com ID "days" . Note que os dias 29 e 30 de novembro estão no array pois representam respectivamente Segunda-feira e Terça-feira.

- Os dias devem estar contidos em uma tag <li> , e todos devem ter a classe day . Ex: <li class="day">3</li>

- Os dias 24, 25 e 31 são feriados e, além da classe day , devem conter também a classe holiday . Ex: <li class="day holiday">24</li>

- Os dias 4, 11, 18 e 25 são Sexta-feira. Eles devem conter a classe day e a classe friday . Ex: <li class="day friday">4</li>
*/

const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

function insertDays () {  
  let elementDays = document.getElementById('days');
  
  for (let index = 0 ; index < dezDaysList.length; index += 1) {
    let days = dezDaysList[index];
    listDay = document.createElement('li');
    
    if (days === 24 || days === 31) {
      listDay.className = 'day holiday';
      listDay.innerHTML = days;
      elementDays.appendChild(listDay);
    }
    else if (days === 4 || days === 11 || days === 18 ) {
      listDay.className = 'day friday';
      listDay.innerHTML = days;
      elementDays.appendChild(listDay);
    }
    else if (days === 25){
      listDay.className = 'day holiday friday';
      listDay.innerHTML = days;
      elementDays.appendChild(listDay);
    }
    else {
      listDay.className = 'day';
      listDay.innerHTML = days;
      elementDays.appendChild(listDay);
    } 
  }
}
insertDays();

/* 
Exercício 2:

Implemente uma função que receba como parâmetro a string "Feriados" e crie dinamicamente um botão com o nome "Feriados".

- Adicione a este botão a ID "btn-holiday" .

- Adicione este botão como filho/filha da tag <div> com classe "buttons-container" .
*/


function addHolidayButton (string) {
  let buttonContainer = document.querySelector('.buttons-container');
  let newButton = document.createElement('button');
  newButton.id = 'btn-holiday';
  newButton.innerHTML = string;
  buttonContainer.appendChild(newButton);
}

addHolidayButton('Feriado');

/*
Exercício 3:

Implemente uma função que adicione ao botão "Feriados" um evento de "click" que muda a cor de fundo dos dias que possuem a classe "holiday" .
 
- É interessante que este botão possua também a lógica inversa. Ao ser clicado novamente ele retorna à configuração   inicial com a cor "rgb(238,238,238)" .

*/

function changeColorHoliday() {
  let getHolidayButton = document.querySelector('#btn-holiday');
  let arrayHoliday = document.querySelectorAll('.holiday');
  let bgColor = 'rgb(238,238,238)';
  let standartWhite = 'white';

  getHolidayButton.addEventListener('click', function() {
    for (index = 0; index < arrayHoliday.length; index += 1) {
      if (arrayHoliday[index].style.backgroundColor === standartWhite) {
        arrayHoliday[index].style.backgroundColor = bgColor;
      }
      else {
        arrayHoliday[index].style.backgroundColor = standartWhite;
      }
    }
  })
};
changeColorHoliday();

/*
Exercício 4:

Implemente uma função que receba como parâmetro a string "Sexta-feira" e crie dinamicamente um botão com o nome "Sexta-feira".

- Adicione a este botão o ID "btn-friday" .

- Adicione este botão como filho/filha da tag <div> com classe "buttons-container" .

*/

function addFridayButton (string) {
  let buttonContainer = document.querySelector('.buttons-container');
  let newButton = document.createElement('button');
  newButton.id = 'btn-friday';
  newButton.innerHTML = string;
  buttonContainer.appendChild(newButton);
}

addFridayButton('Sexta-feira');

/*
Exercício 5:
Implemente uma função que adicione ao botão "Sexta-feira" um evento de "click" que modifica o texto exibido nos dias que são Sexta-feira.

É interessante que este botão possua também a lógica inversa. Ao ser clicado novamente ele retorna à configuração inicial exibindo os dias.
*/

function changeTextFriday(vetor) {
  let getFridayButton = document.querySelector('#btn-friday');
  let arrayFriday = document.querySelectorAll('.friday');
  let textIn = 'Sextou!'
  let standartWhite = 'white';

  getFridayButton.addEventListener('click', function() {
    for (index = 0; index < arrayFriday.length; index += 1) {
      if (arrayFriday[index].innerHTML !== textIn) {
        arrayFriday[index].innerHTML = textIn;
      }
      else {
        arrayFriday[index].innerHTML = vetor[index];
      }
    }
  })
};

let vetor = [4, 11, 18, 25];
changeTextFriday(vetor);

/*
Exercício 6:

Implemente duas funções que criem um efeito de "zoom". Ao passar o ponteiro do mouse em um dia do mês no calendário, o texto desse dia deve aumentar e, quando o ponteiro do mouse sair do dia, o texto deve retornar ao tamanho original.

- Dica - Propriedade: event.target .
*/
function mouseOverDays () {
  let getDays = document.querySelector('#days');

  getDays.addEventListener('mouseover', function(event) {
    event.target.style.fontSize = '35px';
  })
}
mouseOverDays();

function mouseOverOut () {
  let getDays = document.querySelector('#days');

  getDays.addEventListener('mouseout', function(event) {
    event.target.style.fontSize = '20px'
  })
}
mouseOverOut();


/*
Exercício 7:

Implemente uma função que adiciona uma tarefa personalizada ao calendário. A função deve receber como parâmetro a string com o nome da tarefa (ex: "cozinhar") e criar dinamicamente um elemento com a tag <span> contendo a tarefa.

- O elemento criado deverá ser adicionado como filho/filha da tag <div> que possui a classe "my-tasks" .
*/

function insertTaskSpan (string){
  let myTasks = document.querySelector('.my-tasks');
  let newTag = document.createElement('span');

  newTag.innerHTML = string;
  myTasks.appendChild(newTag);
}

insertTaskSpan('Cozinhar');

/*
Exercício 8:

Implemente uma função que adiciona uma legenda com cor para a tarefa criada no exercício anterior. Esta função deverá receber como parâmetro uma string ("cor") e criar dinamicamente um elemento de tag <div> com a classe task .

- O parâmetro cor deverá ser utilizado como cor de fundo da <div> criada.

- O elemento criado deverá ser adicionado como filho/filha da tag <div> que possui a classe "my-tasks" .
*/

function addLabelColor(string) {
  let myTasks = document. querySelector('.my-tasks');
  let task = document.createElement('div');
  task.className = 'task';
  task.style.backgroundColor = string;
  myTasks.appendChild(task);
}
addLabelColor('green');


/*
Exercício 9:
Implemente uma função que adiciona um evento que ao clicar no elemento com a tag <div> referente a cor da sua tarefa, atribua a este elemento a classe task selected , ou seja, quando sua tarefa possuir a classe task selected ela estará selecionada.

- Ao clicar novamente no elemento a sua classe deverá voltar a ser somente task , ou seja, esta tarefa está deixando de ser uma tarefa selecionada.
*/

function switchTaskClass () {
  let addClassTask = document.querySelectorAll('.task');

  
  for(let index = 0; index < addClassTask.length; index += 1) {
    addClassTask[index].addEventListener('click', function(event) {
    
      if (event.target.className !== 'task selected') {
        event.target.classList.add('selected');
      }
      else {
        event.target.classList.remove('selected');
      }
    })
  }
}
switchTaskClass();



/*
Exercício 10:

Implemente uma função que adiciona um evento que ao clicar em um dia do mês no calendário, atribua a este dia a cor da legenda da sua tarefa selecionada.

- Ao clicar novamente no dia com a cor da legenda, a sua cor deverá voltar à configuração inicial rgb(119,119,119) .
*/

function setDaysColor () {
  let colorDays = document.querySelectorAll('#days');
  
  for (let index = 0; index < colorDays.length; index += 1) {
    colorDays[index].addEventListener('click', function (event) {
      if (event.target.style.color === 'green') {
        event.target.style.color = 'rgb(119,119,119)';
      }
      else {
        event.target.style.color = 'green';
      }
    })
  }
}
setDaysColor();

/*
Bônus:

Vamos adicionar compromissos ao seu calendário? Implemente uma função que, ao digitar um compromisso na caixa de texto "COMPROMISSOS", adiciona o item à lista "MEUS COMPROMISSOS" ao clicar no botão "ADICIONAR".

-Se nenhum caractere for inserido no campo input , a função deve retornar um alert com uma mensagem de erro ao clicar em "ADICIONAR".

- Ao pressionar a tecla "enter" o evento também deverá ser disparado.

- Dica - Propriedade: keyCode .
*/