const fs = require('fs');

function writeFile(nomeDoArquivo, conteudoDoArquivo) {
  fs.writeFileSync(`./${nomeDoArquivo}`, conteudoDoArquivo);

  return 'ok';
}

module.exports = writeFile;