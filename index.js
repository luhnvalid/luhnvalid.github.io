function isLuhnValid(value) {

    if (/[^0-9-\s]+/.test(value)) {
        setAnswer("NO");
        return false
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
        setAnswer("YES");
        return false
    } else {
        setAnswer("NO");
        return false
    }
}


function setAnswer(answer) {
    document.getElementById("isLuhnValidAnswer").textContent = answer
}

function startProcessing(){
    document.getElementById("isLuhnValidAnswer").textContent = "o dada"
}
