/*
|--------------------------------------------------------------------------
| FUNCTIONS
|--------------------------------------------------------------------------
*/

import { clockDigital, pointerHour, pointerMinute, pointerSecond } from './elements';

// Seta o zero do lado esquerdo nos valores menores que 10...
export function handleFixZero(time) {
    return (time < 10)
        ? `0${time}`
        : time;
}

// Envia pro html os valores do relógio digital...
export function handleClockDigital(hour, minute, second) {
    clockDigital.innerHTML = `${fixZero(hour)}:${fixZero(minute)}:${fixZero(second)}`;
}

// Cálculo da rotação dos ponteiros...
export function handleRotatePointersCalc(hour, minute, second) {
    // Hora é dividida por 12 por que o relógio só tem 12 horas e não 24...
    let hourDeg = ((hour / 12) * hour);
    let minuteDeg = (minute * deg);
    let secondDeg = (second * deg);

    return hourDeg, minuteDeg, secondDeg;
}

// Rotaciona os ponteiros com css...
export function handleRotatePointersStyle(hour, minute, second) {
    pointerHour.style.transform = `rotateZ(${hour}deg)`;
    pointerMinute.style.transform = `rotateZ(${minute}deg)`;
    pointerSecond.style.transform = `rotateZ(${second}deg)`;
}

