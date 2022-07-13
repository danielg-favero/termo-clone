function switchRowFocus(row, isDisabled){
    const inputs = row.children;

    for(let i = 0; i < inputs.length; i++){
        inputs[i].disabled = isDisabled;
        inputs[i].classList.toggle("current-row");
    }
    inputs[0].focus();
}