
import React, { Component } from 'react'
import './assets/sass/main.sass';
import Klavye from "./components/Klavye";
import Cikti from "./components/Cikti";
                
class App extends Component {
  state= {
    result: ''
  }
  
  buttonPressed=buttonName => {
    if(buttonName=== '='){
      this.calculate()
    } else
    if (buttonName==='C'){
      this.reset();
    } else if (buttonName==='CE')
    {
      this.backspace();
    } else

    this.setState({
      result: this.state.result + buttonName
    });

  };
  backspace = ()=> {
    this.setState({
      result:this.state.result.slice(0,-1)
    })
  };

  reset= ()=> {
    this.setState({
      result:''
    })
  }

  calculate=() =>{
   try {
     this.setState({
      result: (eval(this.state.result) || "") + ""
    });
  } catch (e) {
    this.setState({
      result:"Hata !"
    })
  };
}
  render() {
    return (
     <div>
       <div className="calc-body">
         <Cikti result={this.state.result} />
         <Klavye buttonPressed={this.buttonPressed}/>
        </div>
    </div>
      );                 
   }
}
export default App; 
