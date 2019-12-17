function ehBissexto(ano) {
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
