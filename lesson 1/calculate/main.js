window.onload = function(e){

    var addition = document.querySelector('input[name=addition]');
    var subtraction = document.querySelector('input[name=subtraction]');
    var division = document.querySelector('input[name=division]');
    var multiplication = document.querySelector('input[name=multiplication]');
    var calc = document.querySelector('input[name=res]');
    var num1 = document.querySelector('input[name=num1]');
    var num2 = document.querySelector('input[name=num2]');

    var res = document.querySelector('.res');

    calc.onclick = function() {
        var resnum = parseInt(num1.value) + parseInt(num2.value);
        this.disabled = true;
        res.innerHTML = resnum;
    }



    var num1 = inputEnabled;
    var num2 = inputEnabled;

    function inputEnabled() {
        calc.disabled = false;
    };

    addition.onclick = function() {
        var resnum = parseInt(num1.value) + parseInt(num1.value);
        res.innerHTML = resnum;
    }
    subtraction.onclick = function() {
        var resnum = parseInt(num1.value) - parseInt(num1.value);
        res.innerHTML = resnum;
    }
    division.onclick = function() {
        var resnum = parseInt(num1.value) / parseInt(num1.value);
        res.innerHTML = resnum;
    }
    multiplication.onclick = function() {
        var resnum = parseInt(num1.value) * parseInt(num1.value);
        res.innerHTML = resnum;
    }

}

