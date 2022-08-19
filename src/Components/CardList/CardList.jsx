import { Component } from "react";

class CardList extends Component {
  render() {
    console.log(this.props.monsters);
    console.log("render from cardlist");
    const { monsters } = this.props;
    return (
      <div className="card-list">
        {monsters.map((monster) => (
          <div className="card-container">
          <img src={`https://robohash.org/${monster.id}?set=set2`} alt={`monster ${monster.name}`} />

          </div>
        ))}
      </div>
    );
  }
}

export default CardList;
