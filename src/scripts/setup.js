function setup(numberOfRows){
    const main = document.getElementById("main");
    const firstRow = main.childNodes[1];
    
    // Geração das n linhas do jogo
    let nextNewRow;
    for(let i = 1; i < numberOfRows; i++){
        nextNewRow = firstRow.cloneNode(true);
        main.appendChild(nextNewRow);
        switchRowFocus(nextNewRow, true);
    }
}