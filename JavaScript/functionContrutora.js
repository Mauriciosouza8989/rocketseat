function User(name, age, email, password) {
    this.name = name;
    this.age = age;
    this.email = email;
    this.password = password
}

const Mauricio = new User('Mauricio', 25, 'mauriciosouza123@hotmail.com', 'Vidaloka123');
const Mayk = new User('Mayk', 26, 'maykbrito@rocketseat.com', 'Vidamansa');
console.log(Mauricio);
console.log(Mayk);