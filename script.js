const tab = document.getElementById("table");

function createRow(item) {
  let percentClass = item.price_change_24h > 0 ? "green" : "red";
  return `<tr>
        <td class="img-row"><img src=${item.image}/></td>
        <td class="name-row">${item.name}</td>
        <td class="symbol-row">${item.symbol}</td>
        <td class="price-row">${item.current_price}</td>
        <td class="volume-row">${item.total_volume}</td>
        <td class="percent-row ${percentClass}">${item.price_change_24h.toFixed(
    2
  )}%</td>
        <td class="markCap-row">Mkr Cap: ${item.market_cap}</td>
      </tr>
      `;
}

function renderTable(data) {
  let rows = "";
  data.forEach((item) => {
    rows += createRow(item);
  });
  tab.innerHTML = rows;
}

function fetchData() {
  fetch(
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false"
  )
    .then((res) => {
      console.log(res);
      return res.json();
    })
    .then((data) => {
      renderTable(data);
    })
    .catch((err) => console.error("Error fetching: ", err));
}

function sortByMarkCap() {
  fetch(
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false"
  )
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      let sortedData = data.sort((a, b) => {
        return a.market_cap - b.market_cap;
      });
      renderTable(sortedData);
    })
    .catch((err) => console.error("Error while sort by Market cap: ", err));
}

function sortByPercent() {
  fetch(
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false"
  )
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      let sortedData = data.sort((a, b) => {
        return b.price_change_24h - a.price_change_24h;
      });
      renderTable(sortedData);
    })
    .catch((err) => console.error("Error while sort by percent: ", err));
}

function search(searchKey) {
  //fectch data
  fetch(
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false"
  )
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      // let searchKey = document.getElementById("search-bar").value;
      let filteredData = data.filter((item) => {
        return (
          item.name.toLowerCase().includes(searchKey.toLowerCase()) ||
          item.symbol.toLowerCase().includes(searchKey.toLowerCase)
        );
      });
      renderTable(filteredData);
    })
    .catch((err) => console.error("Error while searching: ", err));
}

document.getElementById("search-bar").addEventListener("keyup", function(event){
  const searchItem = event.target.value;
  search(searchItem);
})



fetchData();