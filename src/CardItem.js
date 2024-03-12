
function CardItem({card}) {
  return (
    <div className="card">
        <div>{card.Cost}</div>
        <h2>{card.Name}</h2>
        <img src={card.ImageURL} alt={card.Name}></img>
        <div>{card.Type}</div>
        <div>{card.Description}</div>
    </div>
  );
}

export default CardItem;
