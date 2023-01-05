//function that get a name as a value and  return  Hello + name Ex: Hello Maurício;
const title = document.getElementById('title');
const input = document.getElementById('input');

function greetings() {
    const name = input.value
    return title.innerHTML = `Hello ${name}.`
}