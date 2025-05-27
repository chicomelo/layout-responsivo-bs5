// seleciona os elementos htmls

const botaoGerar = document.querySelector('#btn-gerar-senha')
const switches = Array.from(
  document.querySelectorAll('input[type="checkbox"]')
)
const resultado = document.querySelector('#resultado')
const inputComprimento = document.querySelector('#comprimento')

function randInt(range){
  return Math.min(Math.floor(Math.random()*range), range - 1)
}

function gerarCaracter(regra){
  switch(regra) {
    case 'numeros':
      return '0123456789'[randInt(10)]

    case 'maiusculas':
      return 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'[randInt(26)]

    case 'minusculas':
      return 'abcdefghijklmnopqrstuvwxyz'[randInt(26)]

    case 'especiais':
      return '!@#$%&*-_='[randInt(10)]

  }
}

// adicionar listener
botaoGerar.addEventListener('click', function(){

    // extrair comprimento
    const comprimento = +inputComprimento.value

    // demonstra método "filter" do Array
    // filter: Array -> Array; #(Array1) >= #(Array2)
    // elementos sao os mesmos, desde que recebam return true
    const switchsSelecionados = switches.filter(
      s => { return s.checked }
    )

    // demonstra método "map" do Array
    // map: Array -> Array; #(Array1) == #(Array2)
    // os tipos podem ser diferentes e os elementos podem se "transformar"
    const regrasSelecionadas = switchsSelecionados.map(s => s.id)

    // gerar os caracteres necessários
    // map
    const caracteres = new Array(comprimento).fill('A').map(
      slot => {
        const regra = regrasSelecionadas[randInt(regrasSelecionadas.length)]
        return gerarCaracter(regra)
      }
    );

    // atualizar a view com a senha gerada

    // Demonstra o método "reduce" do Array
    resultado.innerHTML = caracteres.reduce((acum, c) => {
      return acum+c
    }, '')

    // resultado.innerHTML = caracteres.join('')

})

function validaFormulario(){
    // conta quantos checkboxes estao tickados:
    const tick = switches.filter(s => s.checked).length

    if(tick === 0){
      botaoGerar.disabled = true
    } else {
      botaoGerar.disabled = false
    }
}

// Demonstra o método "forEach" do Array
// forEach: Array -> Nao retorna!
switches.forEach(s => {
  s.addEventListener('change', validaFormulario)
})

validaFormulario();
