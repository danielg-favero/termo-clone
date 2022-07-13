function onDelete(currentInput, event){
    const key = event.keyCode || event.charCode;

    // Verificar se pressionou o backspace
    if(key == 8){
        const previousInput = currentInput.previousElementSibling;

        if (currentInput.getAttribute && previousInput.value != '') {
            currentInput.value = '';
            previousInput.focus();
        }
    }
}