document.querySelector('#press').addEventListener('click', getRick)

function getRick(){
  const choice = document.querySelector('#userName').value
  const url = `https://rickandmortyapi.com/api/character/?name=${choice}`

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        document.querySelector('#image').src=data.results[0].image
        document.querySelector('.name').innerText=data.results[0].name
        document.querySelector('.location').innerText=data.results[0].location.name
        document.querySelector('.status').innerText=data.results[0].status
        document.querySelector('.species').innerText=data.results[0].species
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}
//https://rickandmortyapi.com/