import React, { Component } from "react";
import Button from "../../../components/UI/Button/Button";
import axios from "../../../axios-orders";
import Spinner from "../../../components/UI/Spinner/Spinner";
import "./ContactData.css";
import Input from "../../../components/UI/Input/Input";
class ContactData extends Component {
  state = {
    orderForm: {
      name: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "Your Name",
        },
        value: "",
        validation:{
          required: true
        },
        valid:false,
        touched:false
      },
      street: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "Street",
        },
        value: "",
        validation:{
          required: true
        },
        valid:false,
        touched:false
      },
      zipCode: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "ZIP Code",
        },
        value: "",
        validation:{
          required: true,
          minLength: 5,
          maxLength:5
        },
        valid:false,
        touched:false
      },
      country: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "Country",
        },
        value: "",
        validation:{
          required: true
        },
        valid:false,
        touched:false
      },
      email: {
        elementType: "input",
        elementConfig: {
          type: "email",
          placeholder: "Your E-Mail",
        },
        value: "",
        validation:{
          required: true
        },
        valid:false,
        touched:false
      },
      deliveryMethod: {
        elementType: 'select',
        elementConfig: {
          options: [
            { value: "fastest", displayValue: "Fastest" },
            { value: "cheapest", displayValue: "Cheapest" },
          ],
        },
        value: "cheapest",
        validation:{},
        valid:true
      },
    },
formIsValid:false,
    loading: false,
  };
  orderHandler = (event) => {
    event.preventDefault();
    let formData = {}
    for(let formElementIdentifier in this.state.orderForm){
formData[formElementIdentifier] = this.state.orderForm[formElementIdentifier].value;
    }
    this.setState({ loading: true });
    const order = {
      ingredients: this.props.ingredients,
      price: this.props.price,
      orderData:formData
    };
    axios
      .post("/orders.json", order)
      .then((response) => {
        this.setState({ loading: false });
        this.props.history.push("/");
      })
      .catch((error) => this.setState({ loading: false }));
  };
  checkInValidity = (value, rules)=>{
    let isValid = true;
    if(rules.value){
      isValid = value.trim() !== ' ' && isValid;
    }
    if(rules.minLength){
      isValid = value.minLength >= rules.minLength && isValid;
    }
    
    if(rules.maxLength){
      isValid = value.maxLength <= rules.maxLength && isValid;
    }
    return isValid;

  }
  inputChangeHandler = (event, inputIdentifier)=>{
const updatedOrderForm = {
  ...this.state.orderForm
}
const updatedFormElement = {
  ...updatedOrderForm[inputIdentifier]
};
updatedFormElement.value = event.target.value;
updatedFormElement.valid = this.checkInValidity(updatedFormElement.value,updatedFormElement.validation);
updatedFormElement.touched = true;
updatedOrderForm[inputIdentifier] = updatedFormElement;

let formIsValid = true;
for(let inputIdentifier in updatedOrderForm){
  formIsValid = updatedOrderForm[inputIdentifier].valid && formIsValid;
}
this.setState({orderForm:updatedOrderForm,formIsValid:formIsValid});
  }
  render() {
    const formElementsArray = [];
    for (let key in this.state.orderForm) {
      formElementsArray.push({
        id: key,
        config: this.state.orderForm[key],
      });
    }
    let form = (
      <form onSubmit={this.orderHandler}>
        {formElementsArray.map((formElement) => (
          <Input
          changed = {(event)=>this.inputChangeHandler(event, formElement.id)}
            key={formElement.id}
            touched = {formElement.config.touched}
            shouldValidate={formElement.config.validation}
            invalid = {!formElement.config.valid}
            elementType={formElement.config.elementType}
            elementConfig={formElement.config.elementConfig}
            value={formElement.config.value}
          />
        ))}

        <Button btnType="Success" disabled = {!this.state.formIsValid}>
          Order
        </Button>
      </form>
    );
    if (this.state.loading) {
      <Spinner />;
    }
    return (
      <div className="ContactData">
        <h4>Enter your Contact Data</h4>
        {form}
      </div>
    );
  }
}

export default ContactData;
