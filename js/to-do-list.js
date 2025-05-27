const botaoAdicionar = document.querySelector('#btn-adicionar')
const tarefas = document.querySelector('#tarefas')

botaoAdicionar.addEventListener('click', () => adicionaLinha())


function adicionaLinha(){
  const linha = document.createElement('div');
  linha.classList.add('row')
  linha.innerHTML = `
    <div class="col d-flex gap-2 align-items-center">
      <input
        type="text"
        class="form-control"
        placeholder="Digite sua tarefa"/>
        <div class="form-check form-switch">
          <input
            class="form-check-input"
            type="checkbox"
            role="switch"
          />
        </div>
        <button type="button" class="btn btn-danger"><i class="bi bi-trash3"></i></button>
    </div>
  `
  tarefas.appendChild(linha)

  const botaoExcluir = linha.querySelector('button')

  botaoExcluir.addEventListener("click", () => {
    tarefas.removeChild(linha)
  })

  const switchFinalizadaa = linha.querySelector('input[type="checkbox"]')
  const inputText = linha.querySelector('input[type="text"]')

  switchFinalizadaa.addEventListener("change", (e) => {
    inputText.disabled = e.target.checked;
  })

  inputText.focus();

}
