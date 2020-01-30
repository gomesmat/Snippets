// Se objeto é vazio

objVazio = o => {
    if (Object.entries(o).length === 0 && o.constructor === Object) return true;
    else if (o.constructor === Object) return false;
	else throw "NaO: Parâmetro não é um objeto";
}

