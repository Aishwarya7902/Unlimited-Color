// get a random color
//function to generate a random color
const randomColor=function(){
  const hex="0123456789ABCDEF";
  let color='#';

  for(let i=0;i<6;i++){
    color+=hex[Math.floor(Math.random()*16)];
  }
return color;
};

//start function
let intervalID;
const startChangingColor=function(){
  if(!intervalID){
    intervalID=setInterval(changeBGColor,1000);
  }
  
  function changeBGColor(){
    document.body.style.backgroundColor=randomColor();
  }
};

//stop fucntion
const stopChangingColor=function(){
  clearInterval(intervalID);
  intervalID=null;
};


document.querySelector('#start').addEventListener('click',startChangingColor);

document.querySelector('#stop').addEventListener('click',stopChangingColor);