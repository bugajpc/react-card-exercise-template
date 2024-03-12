import CardItem from "./CardItem";
import { useState, useEffect } from "react";
function CardList() {
  const [deck, setDeck] = useState([])
  
  useEffect(() => {fillDeck()}, [])

  const fillDeck = () => {
    let newDeck = []
    const card = {
      Name: "Banish from Edoras",
      Cost: 5,
      Type: "Sorcery",
      Description: "Lorem ipsum doner kebab",
      ImageURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1Gs414VxtdXuhgdc6aP6S2E5FvcmMHZ1n_ZtAh3VgGA&s"
    }
    const card2 = {
      Name: "Black Lotus",
      Cost: 0,
      Type: "Instant",
      Description: "Lorem ipsum King kebab",
      ImageURL: "https://www.wargamer.com/wp-content/sites/wargamer/2022/01/Best-mtg-cards-2021-main-image-550x309.jpg"
    }
    newDeck.push(card)
    newDeck.push(card2)
    newDeck.push(card)
    setDeck(newDeck)
  }
  return (
    <div className="deck">
        {deck.map(card => (
            <CardItem card={card}/>
        ))}
    </div>
  );
}

export default CardList;
