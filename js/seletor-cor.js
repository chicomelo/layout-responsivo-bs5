const form = document.querySelector("form");

form.addEventListener("submit", function(event) {
  event.stopPropagation();
  event.preventDefault();

  const cor = form['input-cor'].value;

  const body = document.querySelector("body");

  const corAnterior = body.style.backgroundColor;

  body.style.backgroundColor = cor;

  if(corAnterior == body.style.backgroundColor){
    alert("Cor não pode ser trocada")
  }

  return false;
});
