const promiseRes = fetch('http://localhost:3000/evento',{
  method: 'GET'
})
.then(res => { res.json(); })
.then(obj => {
  console.log(obj.nomeEvento)
  console.log(obj.data)
})
