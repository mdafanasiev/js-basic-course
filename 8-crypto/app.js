function crypto(password) {
    if (!(typeof password === String) || !(password.length > 0)) return false;
    const passSymbols = password.split("");
    const passCodes = passSymbols.map((s) => s.charCodeAt(0));
    const cryptoPassLeft = passCodes
        .filter((code) => code % 2)
        .map((code) => String.fromCharCode(code));
    const cryptoPassRight = passCodes
        .filter((code) => !(code % 2))
        .map((code) => String.fromCharCode(code));
    return cryptoPassLeft.concat(cryptoPassRight).join("");
}

function check(encodedPassword, inputPassword) {
    return encodedPassword === crypto(inputPassword);
}
