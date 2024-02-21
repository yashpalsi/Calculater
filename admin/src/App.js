import React, { Component } from 'react'
import './Style.css'

export default class App extends Component {
  constructor(){
    super()
    this.state={
      Result:0
    }
  }
  calulate=()=>{
            var x=this.fnumbox.value*1
            var y=this.ynumbox.value*1
            var op=this.onumbox.value*1
            var z=0

            switch (op) {
              case 1:z=x+y; break;
              case 2:z=x-y; break;
              case 3:z=x*y; break;
              case 4:z=x/y; break;
              case 5:z=x%y; break;
              default:
            }
            this.setState({Result:z})
  }
  
  render() {
    return (
      <div className='div'>
        <h1 className='cal'>Calculater</h1>
        <div className='sty'>
        <input ref={c=>this.fnumbox=c} placeholder='entert a no.'></input><br></br>
        <input ref={c=>this.ynumbox=c} placeholder='enter a no.'></input><br></br>
        <select ref={c=>this.onumbox=c} onChange={this.calulate}>
          <option value={1}>add</option>
          <option value={2}>sub</option>
          <option value={3}>mul</option>
          <option value={4}>div</option>
          <option value={5}>mod</option>
        </select><br></br>
        <button onClick={this.calulate}>Calculate</button>
        <h1>Result:{this.state.Result}</h1>
        </div>
      </div>
    )
  }
}
