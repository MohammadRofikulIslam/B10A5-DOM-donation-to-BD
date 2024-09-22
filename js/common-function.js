function getInputValueById(id){
  const inputValue = document.getElementById(id).value;
  const getInputNumber= parseFloat(inputValue);
  return getInputNumber;
}
function getTextValueById(id){
  const textValue = document.getElementById(id).innerText;
  const getTextNumber = parseFloat(textValue);
  return getTextNumber;
  
}