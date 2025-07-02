


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
            document.getElementById('localidade').value = json.city
            document.getElementById('ddd').value = json.ddd
            document.getElementById('uf').value = json.state
        })
}

const fetchestados = () => {


    fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados`)
        .then(response => response.json())
        .then(data => {
            console.log(data)

            let options = '<option selected disabled>Selecione...</option>'

            data.forEach(estado => {
                options = options + `<option value="${estado.sigla}">${estado.sigla}</option>`
            });

            document.getElementById('uf').innerHTML = options

        })
}

fetchestados()


const fetchmunicipios = () => {

    
    fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${state}/municipios`)
        .then(response => response.json())
        .then(data => {
            console.log(data)

            let options = ' <option selected disabled>Selecione...</option>'

            data.forEach(city => {
                options = options + `<option value="${city.nome}">${city.nome}</option>`
            });

            document.getElementById('localidade').innerHTML = options

        })

}

fetchmunicipios ()