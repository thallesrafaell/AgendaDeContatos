const form = document.getElementById('form')
let linhas = ``
let nomes = []
let numero = []
const erro = document.getElementById('msg')

form.addEventListener('submit', function(e){
    e.preventDefault()
    addlinhas()
    atttab()
})

function addlinhas(){
    const name = document.getElementById('name')
    const cel = document.getElementById('cel')

    if(nomes.includes(name.value) && numero.includes(cel.value)){
        erro.innerHTML ='Este Nome e Número ja foi adicionado!'
        erro.style.background = '#ff00005b'
        erro.style.color = '#cc5353'
        erro.style.display = 'block'

    } else{
        erro.innerHTML ='Contato Adiconado !'
        erro.style.background = '#32663e6c'
        erro.style.color = '#32663E'
        erro.style.display = 'block'

        nomes.push(name.value)
        numero.push(cel.value)

    let linha = `<tr>`
    linha += `<td>${name.value}</td>`
    linha += `<td>${cel.value}</td>`
    linha += `</tr>`

    linhas += linha  
    }
    name.value = ``
    cel.value = ``

}

function atttab(){
    let tab = document.querySelector('tbody')
    tab.innerHTML = linhas
}


