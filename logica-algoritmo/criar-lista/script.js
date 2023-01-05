let userList = document.getElementById('list');
let input = document.getElementById('addToList');
let msgToUser = document.getElementById('msgToUser');
let option = document.getElementById('option');
let chooseOptions = document.getElementById('chooseOptions');
let adList = document.getElementById('addList');
let page = document.getElementById('page');



let user = prompt('Digite o seu nome:');
let list = []
msgToUser.innerHTML = `Olá ${user}! Digite o número da opção desejada`;

function chooseOption() {
    if (option.value == 1) {
        chooseOptions.style.display = 'none';
        adList.style.display = 'block';
    } else if (option.value == 2) {
        if (list.length > 0) {
            for (let item of list) {
                userList.innerHTML += `<li>${item}</li>`;
            }
        } else {
            alert('A lista está vazia! Adicione itens para listar.')
        }
    } else if (option.value == 3) {
        page.innerHTML = `<h2>Programa finalizado!</h2>`
    } else {
        alert('Opção inválida...');
    }

}

function addList() {
    if (adList.style.display == 'block')
        if (input.value != '') {
            list.push(input.value);
            alert('item adicionado com sucesso!');
            input.value = '';
        } else {
            alert('nenhum item foi adicionado!');
        }
}

function finalizar() {
    chooseOptions.style.display = 'block';
    adList.style.display = 'none';
}