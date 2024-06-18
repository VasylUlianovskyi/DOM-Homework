// 1) Зробити запит даних до одного із серверів (одного з API) на вибір, використовуючи fetch()
// 2) Відобразити дані на сторінці за допомогою DOM
// 3) * Прикрасити стилями за потребою

// - Курс криптовалют від Binance https://api2.binance.com/api/v3/ticker/24hr(дока https://binance-docs.github.io/apidocs/spot/en/#24hr-ticker-price-change-statistics)
// *Наприклад, вивести в дані у вигляді таблиці.

const CRYPTOCURRENCY_RATE_URL = "https://api2.binance.com/api/v3/ticker/24hr";

fetch(`${CRYPTOCURRENCY_RATE_URL}`)
  .then((response) => response.json())
  .then((data) => updateCryptoCurrencyRate(data))
  .catch((error) => console.log(error));

function updateCryptoCurrencyRate(crypto) {
  crypto.forEach((crypto) => {
    const { symbol, lastPrice, priceChange, priceChangePercent } = crypto;

    if (!symbol.endsWith("USDT")) return;

    const baseAsset = symbol.replace("USDT", "");
    const quoteAsset = "USDT";

    const tableBody = document.querySelector("#cryptoTable");
    const row = document.createElement("tr");

    const symbolCell = document.createElement("td");
    symbolCell.textContent = `${baseAsset}/${quoteAsset}`;
    row.appendChild(symbolCell);

    const lastPriceCell = document.createElement("td");
    lastPriceCell.textContent = lastPrice;
    row.appendChild(lastPriceCell);

    const priceChangeCell = document.createElement("td");
    priceChangeCell.textContent = priceChange;
    row.appendChild(priceChangeCell);

    const priceChangePercentCEll = document.createElement("td");
    priceChangePercentCEll.textContent = priceChangePercent;
    row.appendChild(priceChangePercentCEll);

    tableBody.appendChild(row);
  });
}
