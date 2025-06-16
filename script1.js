
let buttons = document.getElementById('reg')

buttons.addEventListener('click', function(e){

    
    let mail = document.getElementById('mail')
    let name = document.getElementById('name')
    let surname = document.getElementById('surname')

    let a = document.getElementById('password')
    let b = document.getElementById('password1')

    var regex = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
    regex.test(mail); // returns true
    if (regex.test(mail) === false){
        alert("Некорректный e-mail")
    }

    if (a!== b) {
        alert("Пароли не совпадают")
    }

});
