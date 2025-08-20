# 🪙 Coin Tracker — Crypto Market Data App

A simple web app that fetches live cryptocurrency market data from the [CoinGecko API](https://www.coingecko.com/en/api) and displays it in a table. The project demonstrates usage of **both** `.then()` and **async/await\`** for handling promises, along with search and sorting functionalities.

---

## 🚀 Features

* Fetch cryptocurrency market data from the [CoinGecko Markets API](https://api.coingecko.com/api/v3/coins/markets).
* Implemented in **both** promise styles:

  * **`.then()`**
  * **`async/await`**
* Renders results in a responsive HTML table with:

  * Coin **image**
  * **Name**
  * **ID**
  * **Symbol**
  * **Current Price** (USD)
  * **Market Cap**
  * **24h Percentage Change**
  * **Total Volume**
* **Search** coins by name or symbol.
* **Sort** data by Market Cap and 24h % Change (toggle ascending/descending).
* Status indicator for loading/success/error.
* Mode badge showing whether data was fetched via `.then()` or `async/await`.

---

## 📦 Tech Stack

* **HTML5**
* **CSS3** (Vanilla CSS)
* **JavaScript (ES6+)**
* **CoinGecko API**

---

## 🛠️ How to Run

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/coin-tracker.git
   cd coin-tracker
   ```

2. Open `index.html` in your browser.

(No build tools required — it’s a single-file web app.)

---

## 📋 API Endpoint

```http
GET https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false
```

**Parameters Used:**

* `vs_currency=usd`
* `order=market_cap_desc`
* `per_page=10`
* `page=1`
* `sparkline=false`

---

## 📄 License
MIT License — free to use and modify.
