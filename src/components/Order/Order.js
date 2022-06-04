import React, { Component } from "react";
import "./Order.css";
class Order extends Component {
  render() {
    const ingredients = [];
    for (let ingredientName in this.props.ingredients) {
      ingredients.push({
        name: ingredientName,
        amount: this.props.ingredients[ingredientName],
      });
    }
    const ingredientsOutput = ingredients.map((ig) => {
      return (
        <span
          key={ig.name}
          style={{
            margin: "0px 8px",
            display: "inline-block",
            textTransform: "capitalize",
            padding:"5px",
            border:'1px solid #ccc'
          }}
        >
          {ig.name} ({ig.amount})
        </span>
      );
    });
    return (
      <div className="Order">
        <p>Ingredients:{ingredientsOutput}</p>
        <p>
          Price:
          <strong>{Number.parseFloat(this.props.price).toFixed(2)}</strong>
        </p>
      </div>
    );
  }
}

export default Order;
