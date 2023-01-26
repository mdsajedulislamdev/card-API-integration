document.getElementById("search").addEventListener("click", () => {
  const Input = document.getElementById("input-value");
  const InputValue = parseInt(Input.value);
  Input.value = "";
  error.innerText = "";
  if (isNaN(InputValue) || InputValue == "") {
    const error = document.getElementById("error");
    error.innerText = "Please input a number";
    Input.value = "";
    return true;
  } else if (InputValue <= 0) {
    error.innerText = "Please input a positive number";
    Input.value = "";
    return true;
  } else if (InputValue > 52) {
    error.innerText = "Don't have sufficient card, have 52 cards only";
    Input.value = "";
    return true;
  } else {
    mainDiv.innerHTML = "";
    fetch(`https://www.deckofcardsapi.com/api/deck/new/draw/?count=${InputValue}`)
      .then((res) => res.json())
      .then((data) => showCard(data.cards));
  }
});

const mainDiv = document.getElementById("mainDiv");
const showCard = (cardList) => {
  for (const card of cardList) {
    const div = document.createElement("div");
    div.classList = "col-12 col-lg-3 col-sm-4 g-3";
    div.innerHTML = `
    <div class="card">
        <img width="100px" height="350px" src="${card.image}" class="card-img-top" alt="card">
        <div class="card-body">
          <h5 class="card-title">Suit: ${card.suit}</h5>
          <p>Value: ${card.value}</p>
          <a href="#" class="btn btn-primary btn-sm">View Details</a>
        </div>
    </div>
    `;
    mainDiv.appendChild(div);
  }
};

/*
 ========= Validations ==================================
 1. Check number or string
 2. Check empty string
 3. Check negative value
 4. Check floating number
 5. Clear input field after clicking search button
 6. Fixed the search history
 7. Fixed highest card amount
*/
