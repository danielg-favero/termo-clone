function submitRow(event, correctWord){
    event.preventDefault();

    const currentRow = event.target;
    const nextRow = currentRow.nextElementSibling;

    const inputs = event.target;
    let guess = '';

    for(let i = 0; i < inputs.length; i++){
        guess += inputs[i].value;

        if(guess[i] === correctWord[i]){
            inputs[i].classList.toggle("correct-position-letter");
        } else {
            const foundLetter = correctWord.indexOf(guess[i]);

            if(foundLetter > -1){
                inputs[i].classList.toggle("has-letter");
            }
        }
    }

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


    // Não acertou a palavra => troca de linha
    if(guess.length === 5){
        switchRowFocus(currentRow, true);
        switchRowFocus(nextRow, false);
    }
}