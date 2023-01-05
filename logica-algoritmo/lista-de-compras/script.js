let list = document.getElementById('list');
let input = document.getElementById('addToList');

function addList() {
    if (input.value != '') {
        list.innerHTML += `<li>${input.value}</li>`;
        input.value = '';
    }
}