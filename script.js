


const consultarcep = () => {
    const cep = document.getElementById('cep').value
console.log('chamou a api')

let uri = `https://cep.awesomeapi.com.br/json/${cep}`

console.log(`URI: ${uri}`)

fetch(uri)
.then(response => response.json())
.then(json => console.log(json))
}
