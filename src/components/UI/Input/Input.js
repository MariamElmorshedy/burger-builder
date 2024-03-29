import { getByDisplayValue } from "@testing-library/react";
import React from "react";
import './Input.css';
const input = (props) => {
    let inputElement = null;
    const inputClasses = ["InputElement"];
    if(props.invalid && props.shouldValidate && props.touched){
        inputClasses.push("Invalid")
    }
    switch(props.elementType){
        case('input'):
        inputElement = <input onChange={props.changed} className={inputClasses.join(' ')} {...props.elementConfig} value = {props.value}/>
        break;
        case('textarea'):
        inputElement = <textarea onChange={props.changed} className={inputClasses.join(' ')} {...props.elementConfig} value = {props.value}/>
        break;
        case('select'):
        inputElement = (
            <select
            onChange={props.changed} className={inputClasses.join(' ')}
            value = {props.value}>
{props.elementConfig.options.map(option=>(
    <option key = {option.value} value={option.value}>
        {option.displayValue}
    </option>
))}
            </select>
        );
        break;
        default:
            inputElement = <input onChange={props.changed} className={inputClasses.join(' ')} {...props.elementConfig} value = {props.value}/>
    }
    return ( 
        <div className={inputClasses.join('')}>
            <label className="Label">{props.label}</label>
        {inputElement}
        </div>
     );
}
 
export default input;