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
          <img src="" alt="monster" />

          </div>
        ))}
      </div>
    );
  }
}

export default CardList;
