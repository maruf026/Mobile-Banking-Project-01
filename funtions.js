function inputValue(id){
    let value=document.getElementById(id).value;
    return value;
 }

 function getInputValueById(id){
    let inputValue=document.getElementById(id).value;
    let inputValueNum= parseFloat(inputValue);
    return inputValueNum;
 }

 function getTextValueById(id){
    let textValue=document.getElementById(id).innerText;
    let textValueNum= parseFloat(textValue);
    return textValueNum;
 }

 function showSection(id){
    // remove all section
    document.getElementById('addmoney-sec').classList.add('hidden');
    document.getElementById('cashout-sec').classList.add('hidden');
    document.getElementById('transaction-sec').classList.add('hidden');

    // calling specific section
    document.getElementById(id).classList.remove('hidden');
 }