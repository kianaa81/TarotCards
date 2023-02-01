// fetch('https://tarot-api.onrender.com/api/v1/cards')
//   .then(response => response.json())
//   .then(data => console.log(data))
//   .catch(error => console.error('Error:', error))

fetch('https://tarot-api.onrender.com/api/v1/cards')
  .then(response => response.json())
  .then(data => {
      const card1 = document.getElementById("card");
      if (data.length <= 0) {
          card1.innerHTML += `${'No cards'}`;
      } else {
                for (cards in data) {
                    //console.log(data[cards[i].value]);
                    card1.innerHTML += `${data[cards]}<br>`;
}
}
})
.catch(error => console.error('Error:', error))






