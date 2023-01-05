let user = {
    name: 'Mauricio',
    surname: 'Sousa',
    job: null,
    age: 25
}


let myClean = (object) => {


    if (object.job == null) {

        delete object.job;
    }

    console.log(user)
}


myClean({
    name: 'Mauricio',
    surname: 'Sousa',
    job: null,
    age: 25
});