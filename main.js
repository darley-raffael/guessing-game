// VARIÁVEIS
const bntTry = document.querySelector('#bntTry')
const bntReset = document.querySelector('#bntReset')
const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
const randomNumber = Math.round(Math.random() * 10)
let xAttempts = 1

// EVENTOS
bntTry.addEventListener('click', handleTryClick)
bntReset.addEventListener('click', handleResetClick) 
// document.addEventListener('keydown', function(e){
//     if(e.key == 'Enter') {
//         handleResetClick()
//     }
// })

// FUNÇÃO CALLBACK
function handleTryClick(event){
    event.preventDefault() // Não executar o evento padrão do botão

    const inputNumber = document.querySelector("#inputNumber")

    if (Number(inputNumber.value) == randomNumber) {
        screen1.classList.add('hide')
        screen2.classList.remove('hide')

        document.querySelector('.screen2 h2')
        .innerText = `Você acertou em ${xAttempts} tentativas` 
    } 
    inputNumber.value = ""
    xAttempts++
}

function handleResetClick () {
    toggleScreen()
    xAttempts = 1
}

function toggleScreen(){
    screen1.classList.toggle('hide')
    screen2.classList.toggle('hide')
}

