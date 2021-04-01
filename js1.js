function t5() {
    
  let str = input.value; 
    
    console.log(str); // код выводится в консоли разработчика
    
  return str = str.split('').reverse().join('');

   
    
}

let input = document.querySelector('.i-5');

document.querySelector('.b-5').onclick = function () {
    
    document.querySelector('.out-5').textContent = t5('Alex');
}


