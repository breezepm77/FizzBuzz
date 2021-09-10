const elForm = document.getElementById('form')
const elInput = document.getElementById('input');
const elButton = document.getElementById('button');
const elTitle = document.getElementById('title');


elForm.addEventListener('submit',function (e) {
    e.preventDefault()

    if((elInput.value % 3 === 0) && (elInput.value % 5 === 0)){
        elTitle.textContent = 'FizzBuzz';
    }else if(elInput.value % 3 === 0){
        elTitle.textContent = 'Fizz';
    }else if(elInput.value % 5 === 0){
        elTitle.textContent = 'Buzz';
    }else{
        elTitle.textContent = elInput.value;
    }
})