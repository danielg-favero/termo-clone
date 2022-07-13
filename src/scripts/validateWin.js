function validateWin(event, correctWord){
    const inputs = event.target;
    const guess = combineLetters(inputs);

    const currentRow = event.target;
    const nextRow = currentRow.nextElementSibling;

    // Vitória!
    if(guess === correctWord){
        alert("VOCÊ ACERTOU!");
        document.location.reload();
    }

    // Derrota!
    if(!nextRow){
        alert(`VOCÊ PERDEU :(\n\nA palavra correta era: ${correctWord}`);
        document.location.reload();
    }

    for(let i = 0; i < guess.length; i++){
        if(guess[i] === correctWord[i]){
            inputs[i].classList.toggle("correct-position-letter");
        } else {
            const foundLetter = correctWord.indexOf(guess[i]);
    
            if(foundLetter > -1){
                inputs[i].classList.toggle("has-letter");
            } else {
                inputs[i].classList.toggle("blocked");
            }
        }
    }


    // Não acertou a palavra => troca de linha
    if(guess.length === 5){
        switchRowFocus(currentRow, true);
        switchRowFocus(nextRow, false);
    }
}