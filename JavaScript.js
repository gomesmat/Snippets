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
let ordenado = minhaLista
 .sort((a, b) => a.nome.localeCompare(b.nome))


// Sort numérico
let ordenado = minhaLista
	.sort(function (a, b) { // duas instâncias do objeto da lista
		let a1 = -1; // valor negativo: esquerda aparece antes
		let b1 =  1; // valor positivo: direita aparece antes
		let igual = 0; // zero: objetos iguais
		if (a.numero < b.numero) {
			return a1;
		}
		else if (b.numero < a.numero) {
			return b1;
		}
		else {
			return igual;
		}
	}
);


// Se email já existe
emailCadastrado = (e) => { // e = string email
  if (minhaLista.find( ({email}) => email === e ) === undefined){
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


// Retorna maior data de um array de objetos DATE
let getMaiorData = lista => {
  let maior = lista[0];
  for (let datai of lista) {
    if (datai > maior) maior = datai;
  }
  return maior;
}
