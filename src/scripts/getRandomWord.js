function getRandomWord(){
    const words = [
        "aureo",
        "radio",
        "patio",
        "pilha",
        "papai",
        "cinco",
        "mamae",
        "filho",
        "irmao",
        "luzes",
        "xaxim",
        "negro",
        "etica",
        "ideia",
        "folha",
        "dupla",
        "amigo",
        "tempo",
        "chuva",
        "senso",
        "carro"
    ];

    return words[Math.floor(words.length * Math.random(words.length))];
}