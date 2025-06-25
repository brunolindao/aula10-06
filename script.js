


const consultarcep = () => {
    const cep = document.getElementById('cep').value
console.log('chamou a api')

let uri = `https://cep.awesomeapi.com.br/json/${cep}`

console.log(`URI: ${uri}`)

fetch(uri)
.then(response => response.json())
.then(json => {
    console.log(json)
document.getElementById('logradouro').value = json.address

document.getElementById('bairro').value = json.district
document.getElementById('uf').value = json.state
document.getElementById('localidade').value = json.city
document.getElementById('ddd').value = json.ddd
document.getElementById('uf').value = json.state
})
}
