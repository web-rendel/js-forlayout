window.onload = function(e){

    var items = document.querySelectorAll('.items .item');

    for(var i = 0; i < items.length; i++) {
        items[i].onclick = function(){
            this.style.border = '1px solid red';
        };
    }
    
}

