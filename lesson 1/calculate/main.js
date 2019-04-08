window.onload = function(e){

    var btn = document.querySelector('input[name=calc]');
    var res = document.querySelector('.res');

    btn.onclick = function() {
        var num1 = document.querySelector('input[name=num1]').value;
        var num2 = document.querySelector('input[name=num2]').value;
        var resnum = parseInt(num1) + parseInt(num2);
        res.innerHTML = resnum;
    }

    
}

