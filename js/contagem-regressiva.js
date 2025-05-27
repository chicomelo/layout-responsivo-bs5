const r_dias = document.querySelector('.r-dias')
const r_horas = document.querySelector('.r-horas')
const r_minutos = document.querySelector('.r-minutos')
const r_segundos = document.querySelector('.r-segundos')
const r_nome_evento = document.querySelector('.nome-evento')
const bg_timer = document.querySelectorAll('.bg-dark.text-white');

function atualizaHtml(dias, horas, minutos, segundos){
    r_dias.innerHTML = dias
    r_horas.innerHTML = horas < 10 ? "0" + horas : horas
    r_minutos.innerHTML = minutos < 10 ? "0" + minutos : minutos
    r_segundos.innerHTML = segundos < 10 ? "0" + segundos : segundos
}

const promiseRes = fetch('http://localhost:3000/evento',{
  method: 'GET'
})
.then(res =>  res.json() )
.then(obj => {
  const nomeEvento = obj.nomeEvento
  const dataEvento = new Date(obj.data)
  //const dataEvento = new Date("2025-05-28");
  r_nome_evento.innerHTML = nomeEvento

  function contagem(){

    const dataAtual = new Date()
    const tempoRestante = dataEvento - dataAtual

    const dias = Math.floor(tempoRestante / (1000 * 60 * 60 * 24))
    const horas = Math.floor((tempoRestante % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    const minutos = Math.floor((tempoRestante % (1000 * 60 * 60)) / (1000 * 60))
    const segundos = Math.floor((tempoRestante % (1000 * 60)) / 1000)

    atualizaHtml(dias, horas, minutos, segundos)

    if(dias === 0 && horas === 0 && minutos === 0 && segundos === 0){
      clearInterval(intervalo)
      bg_timer.forEach(bg => {
        bg.classList.remove('bg-dark');
        bg.classList.add('bg-success');
      })

    }

  }
  contagem();
  const intervalo = setInterval(contagem, 1000);

})
