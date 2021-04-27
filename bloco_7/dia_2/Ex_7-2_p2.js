// Exercicio P1 - Bloco 7 - dia 2 

const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

// 1 - Crie uma função para adicionar o turno da manhã na lesson2 . Essa função deve possuir três parâmetros, sendo eles: o objeto a ser modificado, a chave que deverá ser adicionada e o valor dela.

const insertKey = (object, key, value) => {
  object[key] = value;
  console.log(lesson2)
}
insertKey(lesson2, 'turno', 'manhã');

// ========================================================================================================================================

// 2 - Crie uma função para listar as keys de um objeto. Essa função deve receber um objeto como parâmetro.

const showKeys = (obj) => {
  console.log(Object.keys(obj));
}
showKeys(lesson1);

// jeito alternativo 

const listKeys = (obj) =>  Object.keys(obj);
console.log(listKeys(lesson1));

// ========================================================================================================================================

// 3 - Crie uma função para mostrar o tamanho de um objeto.

const getObjectLen = (obj) => {
  const objCount = Object.keys(Object).length;
  console.log(objCount);
}
getObjectLen(lesson2);

// jeito alternativo 

const sizeObj = (obj) =>  Object.keys(obj).length;
console.log(sizeObj(lesson1));

// ========================================================================================================================================

// 4 - Crie uma função para listar os valores de um objeto. Essa função deve receber um objeto como parâmetro.

const showValues = (obj) => Object.values(obj);
console.log(showValues(lesson3));

// ========================================================================================================================================

// 5 - Crie um objeto de nome allLessons , que deve agrupar todas as aulas através do Object.assign . Cada chave desse novo objeto será uma aula, sendo essas chaves: lesson1 , lesson2 e lesson3 . Ao executar o comando console.log(allLessons) , a saída deverá ser a seguinte:

const allLessons = Object.assign({}, { lesson1, lesson2, lesson3 });
console.log(allLessons);

// ========================================================================================================================================


// 6 - Usando o objeto criado no exercício 5, crie uma função que retorne o número total de estudantes em todas as aulas.

// como eu pensei =/

const getNumStudents = (obj) => {
  let students1 = allLessons.lesson1.numeroEstudantes;
  let students2 = allLessons.lesson2.numeroEstudantes;
  let students3 = allLessons.lesson3.numeroEstudantes;

  let totalStudents = students1 + students2 + students3;

  console.log(totalStudents);
}

// getNumStudents(allLessons);

// modo alternativo de fazer

const getNumberOfStudents = (obj) => {
  let total = 0;
  const array = Object.keys(obj);
  for (index = 0; index < array.length; index +=1) {
    total += obj[array[index]].numeroEstudantes;
  }
  return total;
};
console.log(getNumberOfStudents(allLessons));

// ========================================================================================================================================

// 7 - Crie uma função que obtenha o valor da chave de acordo com a sua posição no objeto. Por exemplo:

const getValueByNumber = (obj, number) => Object.values(obj)[number];
console.log(getValueByNumber(lesson1 , 2));

// ========================================================================================================================================

// 8 - Crie uma função que verifique se o par (chave / valor) existe na função. Essa função deve possuir três parâmetros, sendo eles: o objeto, o nome da chave e o valor da chave. Exemplo:

const checkPair = (obj, key, value) => {
  const pair = Object.entries(obj);
  let check = false;
  for (let index = 0; index < pair.length; index += 1) {
    if (pair[index][0] === key && pair[index][1] === value) {
      check = true;
    }
  return check;
  }
}

console.log(checkPair(lesson1, 'materia', 'Matemática'))

// ========================================================================================================================================

// 8 - Crie uma função para contar quantos estudantes assistiram às aulas de matemática. Use o objeto criado no exercício 5.

const countMathStudends =  (obj) => {
  let total = 0;
  const array = Object.keys(obj);
  for (index = 0; index < array.length; index +=1) {
    if (obj[array[index]].materia === 'Matemática') {
      total += obj[array[index]].numeroEstudantes;
    }
  }
  return total
}
console.log(countMathStudends(allLessons));

// ========================================================================================================================================

// 9 - Crie uma função que deverá retornar um objeto que representa o relatório do professor ou professora, as aulas que ele ou ela ministrou e o número total de estudantes. Use o objeto criado no exercício 5:

const getInfo = (obj, name) => {
  const allLessons = [];
  let allStudent = 0;
  const array = Object.values(obj);
  for (index in array) {
    if (array[index].professor === name) {
      allLessons.push(array[index].materia)
      allStudent += array[index].numeroEstudantes;
    }
  }
  return { lessons: allLessons, estudantes: allStudent };
}

const createReport = (allLessons, name) => {
  const report = {};
  report.professor = name;
  Object.assign(report, getInfo(allLessons, name));
  return report;
}
console.log(createReport(allLessons, 'Maria Clara'));