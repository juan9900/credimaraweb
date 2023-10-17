function myFunction() {
    let input, filter, cards, cardContainer, title, i;
    input = document.getElementById("searchInput");
    filter = input.value.toUpperCase();
    cardContainer = document.getElementById("row-special");
    cards = cardContainer.getElementsByClassName("card");
    for (i = 0; i < cards.length; i++) {
      title = cards[i].querySelector(".nombre-2");
      if (title.innerText.toUpperCase().indexOf(filter) > -1) {
        cards[i].style.display = "flex";
      } else {
        cards[i].style.display = "none";
      }
    }
  }
  