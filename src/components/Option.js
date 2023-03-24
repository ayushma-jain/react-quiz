import React from 'react';
import Form from 'react-bootstrap/Form';
import { Config } from '../config/Config';
import axios from 'axios';
import {symbolName} from "../quizQuestion";

class Option extends React.Component {
   
    constructor(props){
       
        super(props);
        this.state = {
            index : props.index,
            value : props.value,
            questionNo :props.questionNo,
            onChangeValue:props.onChangeValue,
            selectedValue:props.selectedValue
          };
          
    }
   
    render(){
    
        const {index, value, questionNo,selectedValue} = this.props;
       
    
        const profitLoss = ((value.fmpLast - value.open)/value.fmpLast);
       
        const PLPurcent = (profitLoss*100).toFixed(2);
        console.log(index);
        console.log(selectedValue);
        return (
            <div className="optionDiv mt-3" key={`key_${index}_${questionNo}`}>
            <Form.Check onChange={this.state.onChangeValue}
                inline
                className='radio-check'
                label={`${index}`}
                value={`${index}`}
                name={`group_${questionNo}`}
                type="radio"
                checked={selectedValue === index}
                id={`option_${index}_${questionNo}`}
            /><label htmlFor={`option_${index}_${questionNo}`}>{`${value}`}</label></div>
        )
    }
 
}
export default Option
