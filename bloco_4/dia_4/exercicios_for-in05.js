let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  recorrente: 'sim'
};
info['recorrente'] = 'sim';

let secondInfo = {
  personagens: 'Tio Patinhas',
  origem: 'Pato hristmas on Bear Mountain, Dells Four Color Comics #178',
  nota: 'O último MacPatinhas',
  recorrente: 'sim'
};


for (let index in info) {
  if (
    info[index] === info.recorrente &&
    info[index] === 'Sim' &&
    secondIndex[index] === 'Sim'
  ) {
    console.log('Ambos recorrentes');
  } else {
    console.log(info[index] + ' e ' + secondInfo[index]);
    
  }
  console.log(index)
  console.log(secondInfo["personagem"])
}
