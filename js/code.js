//GET DOM ELEMENTS

const btnStart = document.querySelector('button.btn');
const headerDiv = document.querySelector('.header');
const jinDiv = document.querySelector('.jin');
const rpanel = document.querySelector('.panelright');
const overLay = document.querySelector('.overlay');
const btnShow = document.querySelector('button.showOmen');
const output = document.querySelector('.output');
const lamp = document.querySelector('.img-div');

btnStart.addEventListener('click',() => {
  setTimeout(function(){
    headerDiv.style.display = 'none';
  },1000);
  setTimeout(() => jinDiv.style.display = 'block',1500);
  setTimeout(() => rpanel.classList.add('click'),2000);
  setTimeout(() => overLay.classList.add('show'),2600);
});

btnShow.addEventListener('click',() => {
  setTimeout(()=> lamp.classList.add('run'),10);
  setTimeout(()=> output.innerHTML = 'Pierwsza wróżba!',1400);
  setTimeout(()=> lamp.classList.remove('run'),1400);
});