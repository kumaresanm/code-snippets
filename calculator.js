const prompt = require('prompt');
prompt.start();
prompt.get(['operator', 'number1', 'number2'], function (err, success) {
    let result;
    if (success.operator == '+') {
        result = success.number1 + success.number2;
    }
    else if (success.operator == '-') {
        result = success.number1 - success.number2;
    }
    else if (success.operator == '*') {
        result = success.number1 * success.number2;
    }
    else {
        result = success.number1 / success.number2;
    }
    console.log(result);
});