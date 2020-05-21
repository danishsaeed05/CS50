// this doesn't actually do anything, it's just a demo of Promise syntax

const url = ''

fetch(url)
.then(function(res) {
  return res.json()
})
.then(function(json){
  return ({
    important: json.importantData,
  })
})
.then(function(data){
  console.log(data)
})
.catch(function(err){
  //handles any error
})

