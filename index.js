

// index.js


let firstValue = 0;
let operator = '';
let all_Values = [];

function writeText(button) {
   let inputText = document.getElementById("txtInput");

   inputText.value += button.innerText;
}



function opertorClick(button)
{
   let inputText = document.getElementById("txtInput");

    firstValue = parseFloat(inputText.value);
    inputText.value="";
    operator =button.innerText;
    console.log(firstValue);
    console.log(operator);
    
}

function calculate() { 
   let inputText = document.getElementById("txtInput");

   let secondValue = parseFloat(inputText.value);
   console.log(secondValue);

   let result = 0;


   switch (operator) {
       case '+':
           result = firstValue + secondValue;
           break;
       case '-':
           result = firstValue - secondValue;
           break;
       case '*':
           result = firstValue * secondValue;
           break;
       case '/':
           result = firstValue / secondValue;
           break;
   }

   inputText.value = result;
   all_Values.push(result);
   console.log(all_Values);
   let valuesInScreen=document.getElementById("DivValues");
   valuesInScreen.innerText =all_Values.toString();
}


function clearInput()
{
    let inputText = document.getElementById("txtInput");
    inputText.value = "";
    firstValue = 0;
    operator = '';
}