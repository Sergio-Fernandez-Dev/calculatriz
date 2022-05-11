window.onload = function(){

    const button = document.getElementById('button');
    const resultBox = document.getElementById('result-box');
    

    button.onclick = function(){
        const num1 = parseFloat(document.getElementById('num1').value);
        const num2 = parseInt(document.getElementById('num2').value);
        const operator = document.querySelector('input[name="operator"]:checked').value;
        let result = 0;
        switch(operator) {
            case 'sum':
                result = num1 + num2; 
                break;
            case 'rest':
                result = num1 - num2; 
                break;
            case 'multiply':
                result = num1 * num2; 
                break;
            case 'divide':
                result = num1 / num2; 
                break;
        }
        resultBox.value = result;
    }
    
}