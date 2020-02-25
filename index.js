'use strict'

const btnStart = document.querySelector('button[data-action="start"]');
const btnStop = document.querySelector('button[data-action="stop"]');
const body = document.querySelector('body');
let timerId;


const colors = [
    '#FFFFFF',
    '#2196F3',
    '#4CAF50',
    '#FF9800',
    '#009688',
    '#795548',
  ];

  const randomIntegerFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };


  function randomColors (){
    timerId = setInterval(() => {
        body.style.backgroundColor = colors[(randomIntegerFromInterval(colors.length,0))]
        }, 1000);
        btnStart.setAttribute('disabled', true);
    };

    btnStart.addEventListener('click', randomColors)
    btnStop.addEventListener('click',()=>{
        clearInterval(timerId);
        btnStart.removeAttribute('disabled');
    })

