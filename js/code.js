//GET DOM ELEMENTS

const btnStart = document.querySelector('button.btn');
const headerDiv = document.querySelector('.header');
const jinDiv = document.querySelector('.jin');
const rpanel = document.querySelector('.panelright');
const overLay = document.querySelector('.overlay');

btnStart.addEventListener('click',() => {
  setTimeout(function(){
    headerDiv.style.display = 'none';
  },1000);
  setTimeout(() => jinDiv.style.display = 'block',1500);
  setTimeout(() => rpanel.classList.add('click'),2000);
  setTimeout(() => overLay.classList.add('show'),2600);

 
});

