let cont = 0;

const botaoMenos = document.querySelector('.botao-menos');
const botaoMais = document.querySelector('.botao-mais');

function soma(valor) {
  cont += valor;

  const output = document.querySelector('.resultado');
  output.innerHTML = cont;

  if(cont == 1){
    output.classList.remove('text-warning')
    output.classList.add('text-success')
  }
  if(cont == -1){
    output.classList.remove('text-success')
    output.classList.add('text-warning')
  }
if(cont == 0){
    output.classList.remove('text-success')
    output.classList.remove('text-warning')
  }
}

botaoMais.addEventListener('click', () => soma(+1));
botaoMenos.addEventListener('click', () => soma(-1));

