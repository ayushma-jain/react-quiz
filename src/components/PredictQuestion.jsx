import React  from 'react';
import Option from './Option';
import { Config } from '../config/Config';


class PredictQuestion extends React.Component {
 
    constructor(props) {
      super(props);
      
      this.state = {
        questionNo : props.questionNo,
        questionData : props.questionData,
        AnswerArray : props.AnswerArray
      }
      this.onChangeValue = this.onChangeValue.bind(this);
    }
    onChangeValue(event) {
      
      this.state.AnswerArray[this.props.questionNo] = event.target.value;
      
  }
  
    loadNextQuestion(questionNo){
     
      this.setState((state) => ({
        questionNo : parseInt(state.questionNo)+1
      }));
    }
    render() {
     
        const { questionNo ,questionData,AnswerArray} = this.props;
        let width = (this.props.questionNo+1)*20;
        
        return (
            <div className="row p-4 questionDiv">
                  <div className="col-4 offset-md-4 mt-3 questionNo">
                    /* Fantasy Quiz # {this.props.questionNo+1} */
                  </div>
                  <div className="offset-md-2 col-8 mt-4">
                    <div className="quiz-question">{this.props.questionData.Question}</div>
                  </div>
                  <div className="col-12">
                    <div className="row m-3">
                      <div className="col-6 offset-md-3">
                      {Object.entries(this.props.questionData.Option).map(([index, value]) => {
                        return (
                          <Option index={index} value={value} questionNo={this.props.questionNo} onChangeValue={this.onChangeValue} selectedValue={AnswerArray[this.props.questionNo]}/>
                        );
                      })}
                      </div>
                    </div>
                  </div>
                  <div className="col-12 bg-white p-4">
                    <div className="row" >
                      <div className="col-8 offset-md-4">
                        <div className='progressBar'><div style={{"width":`${width}%`}}></div></div>
                      </div>
                    </div>
                  </div>
                </div>     
          )
        
    }
  }
  export default PredictQuestion;
