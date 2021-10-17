/* let dia = document.querySelector('#dia'); */
let hora = document.querySelector('#hora');
let minuto = document.querySelector('#minuto');

let end = new Date('11/20/2021 12:30 PM');

let _second = 1000;
let _minute = _second * 60;
let _hour = _minute * 60;
let _day = _hour * 24;

let timer;

function showRemaining() {
    let now = new Date();
    let distance = end - now;

    if (distance < 0) {
        clearInterval(timer);
        document.getElementById('countdown').innerHTML = 'EXPIRED!';

        return;
    }
    let days = Math.floor(distance / _day);
    let hours = Math.floor((distance % _day) / _hour);
    let minutes = Math.floor((distance % _hour) / _minute);

    document.querySelector('#dia').textContent = days;
    document.querySelector('#hora').textContent = hours;
    document.querySelector('#minuto').textContent = minutes;
}

timer = setInterval(showRemaining, 1000);
