
export function getSymbolsFrequencyTable(text) {
    const symbolsFrequencyTable = new Map(new Set(text).entries());
    symbolsFrequencyTable.forEach((value, key) => {
        symbolsFrequencyTable.set(key, 0);
    });
    
    let symbolFrequency = 0;
    let symbol;
    for (let i = 0; i < text.length; i++) {
        if (symbolsFrequencyTable.has(text[i])) {
            symbol = text[i];
            symbolFrequency = symbolsFrequencyTable.get(symbol);
            symbolsFrequencyTable.set(text[i], symbolFrequency + 1)
        }
    }
    return symbolsFrequencyTable;
}