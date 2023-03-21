import React  from 'react';
import Option from './Option';
import { Config } from '../config/Config';


class PredictQuestion extends React.Component {
 
    constructor(props) {
      super(props);
      this.state = {
        questionNo : props.questionNo,
        rerenderParentCallback : props.rerenderParentCallback,
        questionData : props.questionData,
        stockData : []
      };
      
    }
    componentDidMount() {
      const url = Config.base_url+"/otc/real-time-price/"+this.state.questionData.Option+"?apikey="+Config.access_key;
        fetch(`${url}`).then((response) => response.json() ).then((data) =>{
            this.setState({...Config,stockData:data});
            
         })
       .catch((error) => {
            console.log(error);
        });
    }
    loadNextQuestion(questionNo){
     
      this.setState((state) => ({
        questionNo : parseInt(state.questionNo)+1
      }));
    }
    render() {
        const { questionNo ,questionData,stockData,loadNextQuestion} = this.state;
        const labelArray = ['A','B','C'];
        return (
        
            <div className="row p-4 questionDiv">
                  <div className="col-4 offset-md-4 mt-3 questionNo">
                    /* Fantasy Quiz # {this.props.questionNo+1} */
                  </div>
                  <div className="offset-md-2 col-8 mt-4">
                    <div className="quiz-question">{questionData.Question}</div>
                  </div>
                  <div className="col-12">
                    <div className="row m-3">
                      
                      <div className="col-6 offset-md-3">
                      
                      {Object.entries(stockData).map(([index, value]) => {
                        return (
                          <Option index={index} value={value} questionNo={this.props.questionNo} label={labelArray[index]}/>
                        );
                      })}
                      </div>
                    </div>
                  </div>
                  <div className="col-12 bg-white p-4">
                    <div className="row" >
                      <div className="col-4 offset-md-2">
                        <div className='progressBar'><div></div></div>
                      </div>
                      <div className="col-3 pl-3">
                      {/*<button className="w-100 btn btn-success btn-sm" type="submit" onClick={() => { this.loadNextQuestion(this.props.questionNo) }} >Continue</button>*/}
                      </div>
                    </div>
                  </div>
               
                </div>     
          )
        
    }
  }
  export default PredictQuestion;
