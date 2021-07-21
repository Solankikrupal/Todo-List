const todo = document.querySelector('.todoField');
const addbtn = document.querySelector('.addbtn');

const middleContainer = document.querySelector('.middleContainer');
const addedField = document.querySelector('.addedField');
const modifybtn = document.querySelector('.modifybtn');
const removebtn = document.querySelector('.removebtn');



addbtn.addEventListener('click',()=>{

  var div = document.createElement('div');
  div.className = 'middle-container show';

  var input = document.createElement('input');
  input.readOnly = true;
  input.className = 'addedField';
  input.value = todo.value;

  var modbtn = document.createElement('button');
  modbtn.innerHTML='+';
  modbtn.className = 'modifybtn';
  modbtn.addEventListener('click',()=>{
    input.readOnly = false;
    div.classList.toggle('border-glow')
  });

  var rembtn = document.createElement('button');
  rembtn.innerHTML='x';
  rembtn.className = 'removebtn';
  rembtn.addEventListener('click',()=>{

    div.style.animation = "bend 0.5s ease-in-out forwards";
  
  });

  div.appendChild(input);
  div.appendChild(modbtn);
  div.appendChild(rembtn);

  document.body.appendChild(div);
})
