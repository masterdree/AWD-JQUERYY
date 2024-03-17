document.getElementById('menu').addEventListener('click', function() {
    var pizzas = document.getElementsByClassName('pizza');
    for (var i = 0; i < pizzas.length; i++) {
        if (pizzas[i].classList.contains('show-read-more')) {
            pizzas[i].classList.remove('show-read-more');
        } else {
            pizzas[i].classList.add('show-read-more');
        }
    }
});

var modal = document.getElementById("myModal");
var btns = document.getElementsByClassName("btn");
var span = document.getElementsByClassName("close")[0];

for (var i = 0; i < btns.length; i++) {
    btns[i].onclick = function() {
        var pizza = this.parentElement.parentElement;
        var img = pizza.querySelector('img').src;
        var name = pizza.querySelector('h1').textContent;
        var price = "Price: $0.00"; // Replace with actual price
        var description = pizza.querySelector('p').textContent;

        document.getElementById('modal-img').src = img;
        document.getElementById('modal-name').textContent = name;
        document.getElementById('modal-price').textContent = price;
        document.getElementById('modal-description').textContent = description;

        modal.style.display = "block";
    }
}

span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}