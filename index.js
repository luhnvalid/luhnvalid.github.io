function generate(number){

    if (!number.includes("*")){
        return number;
    }

    let limit = 0;
    for (i = 0; i < number.length; i++){
        if (number.charAt(i) === '*'){
            limit = i;
            break
        }
    }

    prefix = number.substring(0,limit);

    const spaces = number.length - limit;

    let numbers = '';
    if (spaces === 1){
        for (i = 0; i < 9; i++){
            if (isLuhnValid(prefix + i) === 'VALID'){
                numbers = numbers + prefix + i + ', ';
            }
        }
    } else if (spaces === 2){
        for (i = 0; i < 9; i++){
            for (j = 0; j < 9; j++)
            if (isLuhnValid(prefix + i + j) === 'VALID'){
                numbers = numbers + prefix + i + j + ', ';
            }
        }
    } else if (spaces === 3){
        for (i = 0; i < 9; i++){
            for (j = 0; j < 9; j++) {
                for (k = 0; k < 9; k++) {
                    if (isLuhnValid(prefix + i + j + k) === 'VALID') {
                        numbers = numbers + prefix + i + j + k + ', ';
                    }
                }
            }
        }
    } else {
        return "Maximum 3 empty characters"
    }

    return numbers.substring(0, numbers.length - 2)
}
function isLuhnValid(value) {

    if (/[^0-9-\s]+/.test(value)) {
        return "INVALID";
    }

    // The Luhn Algorithm.
    let nCheck = 0, bEven = false;
    value = value.replace(/\D/g, "");

    setAnswer("3");
    for (var n = value.length - 1; n >= 0; n--) {
        var cDigit = value.charAt(n),
            nDigit = parseInt(cDigit, 10);

        if (bEven && (nDigit *= 2) > 9) nDigit -= 9;

        nCheck += nDigit;
        bEven = !bEven;
    }

    luhnValid = (nCheck % 10) === 0;

    if (luhnValid) {
        return "VALID";
    } else {
        return "INVALID";
    }
}


function setAnswer(answer) {
    document.getElementById("answer").textContent = answer
}

function startProcessing() {
    const queryString = window.location.search.substring(1);
    const mode = queryString.split("&")[0];
    const number = queryString.split("&")[1];

    if (mode === 'valid') {
        setAnswer(isLuhnValid(number));
    }else if (mode === 'generate'){
        setAnswer(generate(number))
    }else{
        setAnswer('error')
    }
}
