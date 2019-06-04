//GET DOM ELEMENTS

const btnStart = document.querySelector('button.btn');
const headerDiv = document.querySelector('.header');
const jinDiv = document.querySelector('.jin');

btnStart.addEventListener('click',() => {
  setTimeout(function(){
    headerDiv.style.display = 'none';
  },2000);
  setTimeout(() => jinDiv.style.display = 'block',2200);
});