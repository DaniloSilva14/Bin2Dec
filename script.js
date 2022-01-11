function calculate() {
  var binValue = document.getElementById('binValue').value;
  binValue = binValue.split('').reverse().join('');

  const validateStr = new RegExp(/^[0-1]+$/);
  const isValid = validateStr.test(binValue);
  
  if(!isValid) {
    alert("Input aceita apenas 0 e 1");
    document.getElementById('decValue').value = '';
    return;
  } 

  let length = binValue.length;
  let count = 0;
  let decValue = 0;

  do{
    decValue += binValue[count] * Math.pow(2, count)    
    count ++;
  } while(count < length)

  if(decValue) 
    document.getElementById('decValue').value = decValue;
  else 
    document.getElementById('decValue').value = ''
}