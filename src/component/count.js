import React from 'react'
import {connect} from 'react-redux';
import { increment, decrement } from '../actions/action';

function count(props) {
    return (
        <div>
    <button onClick={props.increment}>+</button>
    <span>{props.count}</span>
    <button onClick={props.decrement}>-</button>      
        </div>
    )
}

const mapStateToProps = state=>{

   
   return {
      count :state
    }

   }
   const mapDispatchToProps=dispatch =>{
    return { 
      increment:()=> {dispatch (increment())},
      decrement:()=> {dispatch (decrement())}
    

    
  }
  }
  export default connect(mapStateToProps, mapDispatchToProps)(count)