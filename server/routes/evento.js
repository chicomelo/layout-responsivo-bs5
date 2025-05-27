var express = require('express');
var router = express.Router();

/* GET informaçoes do evento. */
router.get('/', function(req, res, next) {

  // se tiver que configurar cors apenas para esse endpoint
  // res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8080');

  // versao final tarefa
  const data = new Date("2025-06-12");

  // gerar data a 5 segundos de distancia da hora atual
  // const data = new Date();
  // const atual = data.getTime();
  // data.setTime(atual + 10*1000);

  res.send({
    nomeEvento: 'Dia dos namorados',
    data: data
  });

  // data.getDate(); // dia do mes (number)
  // data.getMonth()+1; // mes (number)
  // data.getFullYear(); // ano (number)
  // data.getHours(); // horas (number)
  // data.getMinutes(); // minutos (number)
  // data.getSeconds(); // segundos (number)
  // data.getMilliseconds(); // milisegundos (number)

});

module.exports = router;
