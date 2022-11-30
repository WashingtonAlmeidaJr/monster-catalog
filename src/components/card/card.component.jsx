import "./card.styles.css";
import { Component } from "react";

class Card extends Component {
    render() {
    const {id, name, email}=this.props.monster
return (
    <div className="card-container" key={id}>
        <img src={"https://robohash.org/" + id + 100 + "?set=set2"} alt="" />
        <h1>{name}</h1>
        <p>{email}</p>
    </div>
);
}
}

export default Card;
