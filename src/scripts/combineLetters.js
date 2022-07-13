function combineLetters(letters){
    let word = '';

    for(let i = 0; i < letters.length; i++){
        word += letters[i].value;
    }

    return word;
}