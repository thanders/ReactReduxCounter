import React, {Component} from "react";
import {connect} from 'react-redux';
import './Counter.css';
import CounterOutput from '../../components/CounterOutput/CounterOutput';
import CounterControl from '../../components/CounterControl/CounterControl';

class Counter extends Component{


    render(){
        return(
            <div>
                <CounterOutput value={this.props.ctr}></CounterOutput>
                <CounterControl label= "Increment" clicked={this.props.onIncrementCounter}/>
                <CounterControl label= "Add ten" clicked={this.props.onAddCounter}/>
                <CounterControl  label= "Reset" clicked={this.props.onResetCounter}/>
                <hr/>
                <CounterControl label= "Store Result" clicked={this.props.onStoreResult}/>

                <div>
                    <ul>
                        {this.props.storedResults.map(strResult =>(
                            // Anonymous function added to onClick - means that the function won't be executed when the component is rendered
                            <li key={strResult.id} onClick={ () => this.props.onDeleteResult(strResult.id)}> {strResult.value}</li>
                        ))}

                    </ul>
                </div>
            </div>
        )
    }
}

// Map React props to Redux state
const mapStateToProps = state => {
    return {
      ctr: state.counter,
        storedResults: state.results
    };
};

// Map store.dispatch to props so that React Components can dispatch actions to the reducer. The reducer will then change the state.
const mapDispatchToProps= dispatch => {
    return {
        onIncrementCounter: () => dispatch({type: 'INCREMENT'}),
        onResetCounter: () => dispatch({type: 'RESET'}),
        onAddCounter: () => dispatch({type: 'ADD', value: 10}),
        onStoreResult: (result) => dispatch({type: 'STORE_RESULT', result: result}),
        onDeleteResult: (id) => dispatch({type: 'DELETE_RESULT', resultElID: id})
    }
};

export default connect(mapStateToProps, mapDispatchToProps) (Counter);
