/*
|--------------------------------------------------------------------------
| PRINCIPAL
|--------------------------------------------------------------------------
| LÓGICA
| Círculo tem 360 graus...
| Um minuto tem 60 segundos...
| Um segundo possui 6 graus (360 / 60 = 6)...
*/

// SELECIONA OS ELEMENTOS...
const clockDigital = document.querySelector('.clock__digital');
const pointerHour = document.querySelector('.clock__pointer__hour');
const pointerMinute = document.querySelector('.clock__pointer__minute');
const pointerSecond = document.querySelector('.clock__pointer__second');

// Seta o zero do lado esquerdo nos valores menores que 10...
const handleFixZero = (time) => {
    return (time < 10)
        ? `0${time}`
        : time;
}

// Envia pro html os valores do relógio digital...
const handleClockDigital = (hour, minute, second) => {
    clockDigital.innerHTML = `${handleFixZero(hour)}:${handleFixZero(minute)}:${handleFixZero(second)}`;
}

// Cálculo da rotação dos ponteiros...
const handleRotatePointersCalc = (deg, hour, minute, second) => {
    // Hora é dividida por 12 por que o relógio só tem 12 horas e não 24...
    let hourDeg = ((360 / 12) * hour); // ((hour / 12) * hour);
    let minuteDeg = (minute * deg);
    let secondDeg = (second * deg);

    handleRotatePointersStyle(hourDeg, minuteDeg, secondDeg);
}

// Rotaciona os ponteiros com css...
const handleRotatePointersStyle = (hour, minute, second) => {
    pointerHour.style.transform = `rotateZ(${hour}deg)`;
    pointerMinute.style.transform = `rotateZ(${minute}deg)`;
    pointerSecond.style.transform = `rotateZ(${second}deg)`;
}

setInterval(() => {
    let deg = 6; // Quantidade de graus que um segundo possui...
    let currentTime = new Date(); // Pega a hora atual do host...
    let hour = currentTime.getHours(); // Pega a hora...
    let minute = currentTime.getMinutes(); // Pega os minutos...
    let second = currentTime.getSeconds(); // Pega os segundos...

    handleClockDigital(hour, minute, second);
    handleRotatePointersCalc(deg, hour, minute, second);
});