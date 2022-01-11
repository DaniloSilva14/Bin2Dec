function chooseSelectTo() {
  var selectFrom = document.getElementById('selectFrom').value;

  if(selectFrom == 'binario') {
    document.getElementById('title').innerHTML = 'Conversor Bin2Dec' 
    document.getElementById('selectTo').innerHTML = 'Decimal' 
    document.getElementById('inputSpan').innerHTML = '2'
    document.getElementById('outputSpan').innerHTML = '10'
  } else {
    document.getElementById('title').innerHTML = 'Conversor Dec2Bin' 
    document.getElementById('selectTo').innerHTML = 'Binario'
    document.getElementById('inputSpan').innerHTML = '10'
    document.getElementById('outputSpan').innerHTML = '2'
  } 

  document.getElementById('input').value = ''
  document.getElementById('output').value = ''
}

function calculate() {
  var select = document.getElementById('selectFrom').value;

  if(select == 'binario') 
    bin2dec()
  else
    dec2bin()
}

function bin2dec() {
  var input = document.getElementById('input').value;
  input = input.split('').reverse().join('');

  const validateStr = new RegExp(/^[0-1]+$/);
  const isValid = validateStr.test(input);
  
  if(!isValid) {
    alert("Input aceita apenas 0 e 1");
    document.getElementById('output').value = '';
    return;
  } 

  let length = input.length;
  let count = 0;
  let output = 0;

  do{
    output += input[count] * Math.pow(2, count)    
    count ++;
  } while(count < length)

  if(output) 
    document.getElementById('output').value = output;
  else 
    document.getElementById('output').value = ''
}

function dec2bin() {
  var input = document.getElementById('input').value;

  const validateStr = new RegExp(/^[0-9]+$/);
  const isValid = validateStr.test(input);
  
  if(!isValid) {
    alert("Input aceita apenas numero");
    document.getElementById('output').value = '';
    return;
  } 
  
  let output = 0;
  let rem = 0;
  let i = 1;

  while (input != 0) {
    rem = input % 2;
    input = parseInt(input / 2);
    output = output + rem * i;
    i = i * 10;
  }

  if(output || output == 0) 
    document.getElementById('output').value = output;
  else 
    document.getElementById('output').value = ''
}