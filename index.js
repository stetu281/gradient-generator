function randomNum(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min +1)) + min;
  }

document.querySelector('.button').addEventListener('click', (e) => {

    let color1 = `rgb(${randomNum(0, 255)}, ${randomNum(0, 255)}, ${randomNum(0, 255)})`;
    let color2 = `rgb(${randomNum(0, 255)}, ${randomNum(0, 255)}, ${randomNum(0, 255)})`;
    let angle = randomNum(0, 360);

    document.querySelector('.color').innerHTML = `linear-gradient(${angle}deg, ${color1}, ${color2})`;

    document.querySelector('.background').style.backgroundImage = `linear-gradient(${angle}deg,${color1}, ${color2})`;
})