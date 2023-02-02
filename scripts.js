//Using a button to fetch API
document.addEventListener("DOMContentLoaded", (event) => {
    const getCardBtn = document.getElementById("getCardBtn");
    getCardBtn.addEventListener("click", (event) => {
        fetchData('https://tarot-api.onrender.com/api/v1/cards/random?n=3') //This url fetches 3 cards only
    });
});
//Fetch function 
function fetchData(url) {
    fetch(url)
    .then(response => response.json())
    .then(data => {
        let html = "";
        for (let i=0; i < data.cards.length; i++) {
            html += `<div class="card-section">
            <h2>${data.cards[i].name}</h2>
            <li ><img class="card-li" src="cards_img/${data.cards[i].name_short}.jpg"></li>
            </div>` //Using a div to style each card 
            console.log(data.cards[i]);
        }
    const result = document.getElementById("result");
    result.innerHTML = html;
    })
}




