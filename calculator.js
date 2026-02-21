var displays = document.querySelector('#display');
var buttons = document.querySelectorAll('button');

buttons.forEach((button)=>{
    button.addEventListener('click',function() {
        var value = button.textContent;
        console.log(value);

        if(value === 'C'){
            clear();
        }else if(value === '='){
            calculate();
        }else{
            addValue(value);
        }
    });
});

function addValue(value) {
    display.value += value;
}

function clear() {
    display.value = "";
}

function calculate() {
    try {
        display.value = eval(display.value);
    } catch {
        display.value = "Error";
    }
}