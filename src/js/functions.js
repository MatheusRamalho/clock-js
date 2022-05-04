/*
|--------------------------------------------------------------------------
| FUNCTIONS
|--------------------------------------------------------------------------
*/

import { clockDigital, pointerHour, pointerMinute, pointerSecond } from './elements';

// Seta o zero do lado esquerdo nos valores menores que 10...
export const handleFixZero = (time) => {
    return (time < 10)
        ? `0${time}`
        : time;
}

// Envia pro html os valores do relógio digital...
export const handleClockDigital = (hour, minute, second) => {
    clockDigital.innerHTML = `${handleFixZero(hour)}:${handleFixZero(minute)}:${handleFixZero(second)}`;
}

// Cálculo da rotação dos ponteiros...
export const handleRotatePointersCalc = (deg, hour, minute, second) => {
    // Hora é dividida por 12 por que o relógio só tem 12 horas e não 24...
    let hourDeg = ((360 / 12) * hour); // ((hour / 12) * hour);
    let minuteDeg = (minute * deg);
    let secondDeg = (second * deg);

    handleRotatePointersStyle(hourDeg, minuteDeg, secondDeg);
}

// Rotaciona os ponteiros com css...
export const handleRotatePointersStyle = (hour, minute, second) => {
    pointerHour.style.transform = `rotateZ(${hour}deg)`;
    pointerMinute.style.transform = `rotateZ(${minute}deg)`;
    pointerSecond.style.transform = `rotateZ(${second}deg)`;
}

