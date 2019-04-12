window.onload = function(e){

    var addition = document.querySelector('input[name=addition]');
    var subtraction = document.querySelector('input[name=subtraction]');
    var division = document.querySelector('input[name=division]');
    var multiplication = document.querySelector('input[name=multiplication]');
    var calc = document.querySelector('input[name=res]');

    var res = document.querySelector('.res');

    calc.onclick = function() {
        var num1 = document.querySelector('input[name=num1]').value;
        var num2 = document.querySelector('input[name=num2]').value;
        var resnum = parseInt(num1) + parseInt(num2);
        calc.disabled = true;
        res.innerHTML = resnum;
    }

    var changeInput = document.querySelectorAll('.numberInput');
    // var changeInput = document.querySelector('input[name=num1]');
    console.log(changeInput);

    changeInput.oninput = function() {
        calc.disabled = false;
    }

    addition.onclick = function() {
        var num1 = document.querySelector('input[name=num1]').value;
        var num2 = document.querySelector('input[name=num2]').value;
        var resnum = parseInt(num1) + parseInt(num2);
        res.innerHTML = resnum;
    }
    subtraction.onclick = function() {
        var num1 = document.querySelector('input[name=num1]').value;
        var num2 = document.querySelector('input[name=num2]').value;
        var resnum = parseInt(num1) - parseInt(num2);
        res.innerHTML = resnum;
    }
    division.onclick = function() {
        var num1 = document.querySelector('input[name=num1]').value;
        var num2 = document.querySelector('input[name=num2]').value;
        var resnum = parseInt(num1) / parseInt(num2);
        res.innerHTML = resnum;
    }
    multiplication.onclick = function() {
        var num1 = document.querySelector('input[name=num1]').value;
        var num2 = document.querySelector('input[name=num2]').value;
        var resnum = parseInt(num1) * parseInt(num2);
        res.innerHTML = resnum;
    }

    
}

