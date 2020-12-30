const HOURHAND = document.querySelector('#hour');
const MINUTEHAND = document.querySelector('#minute');
const SECONDHAND = document.querySelector('#second');

var date = new Date();
console.log(date);
let hr = date.getHours();
let min = date.getMinutes();
let sec = date.getSeconds();
console.log('Hour: ' + hr + ' Minute: ' + min + ' Second: ' + sec);

let hrPosition = (hr * 360) / 12 + (min * (360 / 60)) / 12;
let minPosition = (min * 360) / 60 + (sec * (360 / 60)) / 60;
let secPosition = (sec * 360) / 60;

function clock() {
    hrPosition = hrPosition + 3 / 360;
    minPosition = minPosition + 6 / 60; //(1/60)*6
    secPosition = secPosition + 6; //360/60

    HOURHAND.style.transform = 'rotate(' + hrPosition + 'deg)';
    MINUTEHAND.style.transform = 'rotate(' + minPosition + 'deg)';
    SECONDHAND.style.transform = 'rotate(' + secPosition + 'deg)';
}

var inteval = setInterval(clock, 1000);
