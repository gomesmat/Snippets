// Se objeto é vazio
objVazio = o => {
    if (Object.entries(o).length === 0 && o.constructor === Object) return true;
    else if (o.constructor === Object) return false;
	else throw "NaO: Parâmetro não é um objeto";
}


// Se o ano (string ou number) é bissexto
ehBissexto = ano => {
    let a = 1 * ano;
    if (a % 4 === 0) {
      if (a % 100 === 0) {
        if (a % 400 !== 0) {
          return false;
        }
        if (a % 400 === 0) {
          return true;
        }
      }
      if (a % 100 !== 0) {
        return true;
      }
    }
    if (a % 4 !== 0) {
      return false;
    }
  }

// Sort alfabético
const myData = this.state.lista
 .sort((a, b) => a.nome.localeCompare(b.nome))


// Se email já existe
emailCadastrado = (e) => { // e = string email
  if (all.find( ({email}) => email === e ) === undefined){
    return false;
  } else {
    console.log(`Email \'${e}\' já cadastrado.`);
    return true;
  }
}

// Converte ISO para Date
isoDate = date => {
  let a = date.split('T');
  let dia = a[0];
  let hora = a[1]
  dia = dia.split('-');
  hora = hora.split(':');
  return new Date(dia[0], dia[1] - 1, dia[2], hora[0] - 3, hora[1], hora[2].slice(0,2));
}
