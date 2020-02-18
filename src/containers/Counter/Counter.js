import React, {Component} from "react";
import {connect} from 'react-redux';
import './Counter.css';
import CounterOutput from '../../components/CounterOutput/CounterOutput';
import CounterControl from '../../components/CounterControl/CounterControl';
import * as actionTypes from '../../store/actions';

class Counter extends Component{


    render(){
        return(
            <div>
                <CounterOutput value={this.props.ctr}/>
                <CounterControl label= "Increment" clicked={this.props.onIncrementCounter}/>
                <CounterControl label= "Add ten" clicked={this.props.onAddCounter}/>
                <CounterControl  label= "Reset" clicked={this.props.onResetCounter}/>
                <hr/>
                <CounterControl label= "Store Result" clicked={() => this.props.onStoreResult(this.props.ctr)}/>

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
      ctr: state.ctr.counter,
        storedResults: state.res.results
    };
};

// Map store.dispatch to props so that React Components can dispatch actions to the reducer. The reducer will then change the state.
const mapDispatchToProps= dispatch => {
    return {
        onIncrementCounter: () => dispatch({type: actionTypes.INCREMENT}),
        onResetCounter: () => dispatch({type: actionTypes.RESET}),
        onAddCounter: () => dispatch({type: actionTypes.ADD, value: 10}),
        onStoreResult: (result) => dispatch({type: actionTypes.STORE_RESULT, result: result}),
        onDeleteResult: (id) => dispatch({type: actionTypes.DELETE_RESULT, resultElID: id})
    }
};

export default connect(mapStateToProps, mapDispatchToProps) (Counter);
