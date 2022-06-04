import React from "react";
import Burger from "../../Burger/Burger";
import Button from "../../UI/Button/Button";
import './CheckoutSummary.css';
const checkoutSummary = (props) => {
    return (<div className="CheckoutSummary">
        <h1> we hope it tastes well!</h1>
        <div style={{margin:"auto", width:'100%'}}>
            <Burger ingredients = {props.ingredients}/>
        </div>
        <Button btnType = "Danger" clicked = {props.checkoutCancellHandler}>CANCELL</Button>
        <Button btnType = "Success" clicked = {props.checkoutContinueHandler}>CONTINUE</Button>

    </div>  );
}
 
export default checkoutSummary;