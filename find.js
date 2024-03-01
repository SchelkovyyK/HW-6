"use strict";
document.addEventListener("DOMContentLoaded", () => {
  const searchButton = document.getElementById("searchButton");

  const resultUl = document.getElementById("result");

  searchButton.addEventListener("click", async () => {
    try {
      const get1 = await fetch("https://api.ipify.org/?format=json");
      console.log(get1);
      const data = await get1.json();
      console.log(data);
      const dataIp = data.ip;
      console.log(dataIp);
      const get2 = await fetch(`http://ip-api.com/json/${dataIp}`);
      console.log(get2);
      const delta = await get2.json();
      console.log(delta);
      resultUl.innerHTML = `
    <li>Continent: ${delta.timezone}</li>
    <li>The country: ${delta.country}</li>
    <li>Region: ${delta.region}</li>
    <li>City: ${delta.city}</li>
    <li>District: (${delta.lat},
                    ${delta.lon})</li>`;
    } catch (error) {
      console.error("Error:", error);
    }
  });
});
//?  Асинхронний JS - це не те ж саме, що й одночасний або багатопотоковий. JavaScript може мати асинхронний код,
//?  але він, як правило, однопотоковий. Це як в ресторані з одним працівником, який робить все: подача і приготування їжі.
//?  Але якщо цей працівник працює досить швидко і може перемикатися між завданнями досить ефективно, то буде здаватися,
//?  що у ресторані є кілька робітників.