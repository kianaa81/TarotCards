fetch('https://tarot-api.onrender.com/api/v1/cards')
    .then(response => response.json())
    .then(data => {
        const card1 = document.getElementById("card");
        if (data.cards.length <= 0) {
            card1.innerHTML += `${'No cards'}`;
        } else {
                    let html = "";
                    for (let i = 0; i < data.cards.length; i++) {
                        html += `<div class="card">
                    <h2>${data.cards[i].name}</h2>
                    </div>` //Using a div to style each card 
                        console.log(data.cards[i]);
                    }
                    const result = document.getElementById("result");
                    result.innerHTML = html;


        }
    })
    .catch(error => console.error('Error:', error))






