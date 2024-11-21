function convertInitialCurrencyToTarget(
    amountOfMoney,
    initialCurrency = "руб",
    targetCurrency = "$"
) {
    initialCurrency = initialCurrency.toLowerCase();
    targetCurrency = targetCurrency.toLowerCase();

    if (!isConvertableCurrencies(new Array(initialCurrency, targetCurrency)))
        return null;

    const RubInDollar = 100;
    const RubInEuro = 106;
    const DollarInEuro = RubInEuro / RubInDollar;

    switch (initialCurrency) {
        case targetCurrency:
            return amountOfMoney;
        case "руб":
            return targetCurrency === "$"
                ? amountOfMoney / RubInDollar
                : amountOfMoney / RubInEuro;
        case "$":
            return targetCurrency === "руб"
                ? amountOfMoney * RubInDollar
                : amountOfMoney / DollarInEuro;
        case "euro":
            return targetCurrency === "руб"
                ? amountOfMoney * RubInEuro
                : amountOfMoney * DollarInEuro;
    }
}

function isConvertableCurrencies(currencies) {
    const supportedCurrencies = new Set(["руб", "$", "euro"]);
    return currencies.every((currency) => supportedCurrencies.has(currency));
}
