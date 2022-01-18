// LÓGICA
// Círculo tem 360 graus...
// Um minuto tem 60 segundos...
// Um segundo possui 6 graus (360 / 60 = 6)...

// SELECIONA OS ELEMENTOS...
const clockDigital = document.querySelector('.clock__digital');
const pointerHour = document.querySelector('.clock__pointer__hour');
const pointerMinute = document.querySelector('.clock__pointer__minute');
const pointerSecond = document.querySelector('.clock__pointer__second');

function fixZero(time) {
    // Seta o zero do lado esquerdo nos valores menores que 10...
    return time < 10 ? `0${time}` : time;
}

setInterval(() => {
    let deg = 6; // Quantidade de graus que um segundo possui...
    let currentTime = new Date(); // Pega a hora atual do host...
    let hour = currentTime.getHours(); // Pega a hora...
    let minute = currentTime.getMinutes(); // Pega os minutos...
    let second = currentTime.getSeconds(); // Pega os segundos...

    // Envia pro html os valores do relógio digital...
    clockDigital.innerHTML = `${fixZero(hour)}:${fixZero(minute)}:${fixZero(second)}`;

    // Cálculo da rotação dos ponteiros...
    let hourDeg = ((hour / 12) * hour); // Hora é dividida por 12 por que o relógio só tem 12 horas e não 24...
    let minuteDeg = (minute * deg);
    let secondDeg = (second * deg);

    // Rotaciona os ponteiros com css...
    pointerHour.style.transform = `rotateZ(${hourDeg}deg)`;
    pointerMinute.style.transform = `rotateZ(${minuteDeg}deg)`;
    pointerSecond.style.transform = `rotateZ(${secondDeg}deg)`;
});