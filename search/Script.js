const icon = document.querySelector('.icon');
const container = document.querySelector('.container'); 
const clear = document.querySelector('.clear');

icon.onclick = function() {
    container.classList.toggle('active');
};

clear.onclick = function() {
    document.getElementById('mySearch') .value = '';
};