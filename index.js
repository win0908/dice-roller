
function rollDice() {
    const numOfDice = document.getElementById('numOfDice').value;
    const dice = document.getElementsByClassName('diceH1');
    const errorLabel = document.getElementById('errorLabel');

    const D4  = document.getElementById('D4');
    const D6  = document.getElementById('D6');
    const D8  = document.getElementById('D8');
    const D10 = document.getElementById('D10');
    const D12 = document.getElementById('D12');
    const D20 = document.getElementById('D20');

    let max = 6;
    if(D4.checked) {
        max = 4;
    }
    else if(D6.checked) {
        max = 4;
    }
    else if(D8.checked) {
        max = 4;
    }
    else if(D10.checked) {
        max = 10;
    }
    else if(D12.checked) {
        max = 12;
    }
    else if(D20.checked) {
        max = 20;
    }
    

    if( numOfDice > 6 || numOfDice < 1) {
        errorLabel.style.display = 'block';
        dice[0].style.display = 'block';
        dice[0].textContent = '0'; 
        for (i = 1; i < dice.length; i++) {
            dice[i].style.display = 'none';
        }
    }

    else {

        
        errorLabel.style.display = 'none';
        var i;
        for (i = 0; i < dice.length; i++) {
            if(numOfDice > i) {
                dice[i].style.display = 'block';
                var randNum = Math.floor(Math.random() * max) + 1;
                dice[i].textContent = randNum;
            }
            else {
                dice[i].style.display = 'none';
            }
        }
    }

    

    
    


}

