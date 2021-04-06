
function changeParagraph () {
  document.getElementsByTagName("p")[1].innerText = "Ola meu nome é Thiago atualmente estou fazendo o curso de Web Developer na Trybe desejo estar empregado a área e ganhando em dolares";
}
changeParagraph();

function changeColor () {
  let mainContent = document.getElementsByClassName("main-content")[0];
  mainContent.style.backgroundColor = "rgb(76,164,109)";
}
changeColor();

function chnageColorCenter () {
  let centerContent = document.getElementsByClassName("center-content")[0];
  centerContent.style.backgroundColor = "white";
}
chnageColorCenter();

function switchText (text){
  let texth1 = document.getElementsByTagName("h1");
  texth1[0].innerText = text
}
switchText('Bloco 5 - Exercicio 1');


function toUpper () {
  let text = document.getElementsByTagName("p")[0];
  text.innerText = text.innerText.toUpperCase();
}
toUpper();

function printTagsP () {
  let array = document.getElementsByTagName ("p")
  for (let index = 0; index < array.length; index += 1) {
    console.log(array[index].innerText);
  }
}
printTagsP();

