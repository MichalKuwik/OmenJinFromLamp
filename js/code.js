//GET DOM ELEMENTS

const btnStart = document.querySelector('button.btn');
const headerDiv = document.querySelector('.header');
const jinDiv = document.querySelector('.jin');
const rpanel = document.querySelector('.panelright');
const overLay = document.querySelector('.overlay');
const btnShow = document.querySelector('button.showOmen');
const btnAdd = document.querySelector('button.addOmen');
const output = document.querySelector('.output');
const lamp = document.querySelector('.img-div');
const info = document.querySelector('.alert');
const infoCounter = document.querySelector('.infoCount');

const input = document.getElementById('inputOmen');

btnStart.addEventListener('click',() => {
  setTimeout(function(){
    headerDiv.style.display = 'none';
  },1000);
  setTimeout(() => jinDiv.style.display = 'block',1500);
  setTimeout(() => rpanel.classList.add('click'),2000);
  setTimeout(() => overLay.classList.add('show'),2600);
});

btnShow.addEventListener('click',() => {
  const randomOmenShow = () => {
    const index = Math.floor(Math.random() * omenArray.length);
    output.innerHTML = `${omenArray[index]}`;
  }
  setTimeout(()=> lamp.classList.add('run'),10);
  setTimeout(randomOmenShow,1400);
  setTimeout(()=> lamp.classList.remove('run'),1400);

  
});

const omenArray = [
  'Weź się do roboty!',
  'Będziesz łysy za kilka lat',
  'Będziesz sławn(y)(a)',
  'Poznasz swoją miłość'
];

btnAdd.addEventListener('click',()=> {
  
  

  setTimeout(()=> info.classList.add('showInfo'),1000);
  setTimeout(()=> {
    infoCounter.classList.add('showCount');
    
      

    },500);
    let number = omenArray.length;
    infoCounter.innerHTML = `Ilość wróżb: ${number}`;
    console.log(omenArray);

    let newValue = input.value;
    
    if(input.value){
      omenArray.push(newValue);
      newValue = '';
    }
});





