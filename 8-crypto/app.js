function crypto(password) {
    if (!(typeof password === "string") || password.length < 6) return false;
    const passSymbols = password.split("");
    const midElementIndex = Math.ceil(passSymbols.length / 2);
    const passSymbolsLeft = passSymbols.slice(0, midElementIndex);
    const passSymbolsRight = passSymbols.slice(midElementIndex);
    handlePasswordHalves(passSymbolsLeft, passSymbolsRight);
    return passSymbolsLeft.concat(passSymbolsRight).join("");
}

function check(encodedPassword, inputPassword) {
    return encodedPassword === crypto(inputPassword);
}

function handlePasswordHalves(passSymbolsLeft, passSymbolsRight) {
    midRightIndex = Math.floor(passSymbolsRight.length / 2);
    [passSymbolsLeft[0], passSymbolsRight[midRightIndex]] = [
        passSymbolsRight[midRightIndex],
        passSymbolsLeft[0],
    ];
    [
        passSymbolsLeft[passSymbolsLeft.length - 1],
        passSymbolsRight[passSymbolsRight.length - 1],
    ] = [
        passSymbolsRight[passSymbolsRight.length - 1],
        passSymbolsLeft[passSymbolsLeft.length - 1],
    ];
}
