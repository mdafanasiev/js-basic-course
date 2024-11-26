function convertInitialCurrencyToTarget(
    amountOfMoney,
    initialCurrency = "руб",
    targetCurrency = "$"
) {
    initialCurrency = initialCurrency.toLowerCase();
    targetCurrency = targetCurrency.toLowerCase();

    if (!isConvertableCurrencies([initialCurrency, targetCurrency]))
        return null;

    const RubInDollar = 100;
    const RubInEuro = 106;
    const DollarInEuro = RubInEuro / RubInDollar;

    switch (initialCurrency) {
        case targetCurrency:
            return amountOfMoney;
        case "руб":
            switch (targetCurrency) {
                case "$":
                    return amountOfMoney / RubInDollar;
                case "euro":
                    return amountOfMoney / RubInEuro;
            }
        case "$":
            switch (targetCurrency) {
                case "руб":
                    return amountOfMoney * RubInDollar;
                case "euro":
                    return amountOfMoney / DollarInEuro;
            }
        case "euro":
            switch (targetCurrency) {
                case "руб":
                    return amountOfMoney * RubInEuro;
                case "$":
                    return amountOfMoney * DollarInEuro;
            }
    }
}

function isConvertableCurrencies(currencies) {
    const supportedCurrencies = new Set(["руб", "$", "euro"]);
    return currencies.every((currency) => supportedCurrencies.has(currency));
}
