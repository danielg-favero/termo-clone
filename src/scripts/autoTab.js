function autoTab(currentInput) {
    const nextInput = currentInput.nextElementSibling;

    if (currentInput.getAttribute && currentInput.value.length == currentInput.getAttribute("maxlength")) {
        nextInput.focus() 
    }
}