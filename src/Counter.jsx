import React from 'react'
import { isFulfilled } from 'q';


const getColor=value=>{
    if (value==0)
    return "black"
    if(value<0)
    return "red"
    if(value>0)
    return "green"
}
class Counter extends React.Component{
    state={value :0,detal:0}
    change=value=>{
        const curentValue = this.state.value
        this.setState({value:curentValue+value})   
    }
    changeDetal=value=>{
        const curentValue = this.state.detal
        this.setState({detal:curentValue+value})   
    }
    reset=()=>{
        this.setState({value:0})
    }
    render(){
        const value =this.state.value
        const detal =this.state.detal
        return(
        <div>
            <div>current value: <span style={{color:getColor(value)}}>{value}</span></div>
            <div>
              <button onClick={()=>this.change(this.state.detal)}>Update</button><span>Ket Qua: {this.state.value+this.state.detal}</span>
            </div>
            <div>delta: <span style={{color:getColor(detal)}}>{detal}</span></div>
            <div>
              <button onClick={()=>this.changeDetal(1)}>Increase</button>
              <button onClick={()=>this.changeDetal(-1)}>Decrease</button>
            </div>
        </div>
      )
    }
}




export default Counter