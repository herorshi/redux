import React, { Component } from "react";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import Home from "./Home";
const state_start = {
  result: 15000,
  value: []
};

class App extends Component {
  state = {};
  componentDidMount() {
    console.log("Mount");
  }

  render() {
    const user_reducer = (state = { name: "Metasit", Age: 25 }, action) => {
      switch (action.type) {
        case "setName":
          state = {
            ...state,
            name: action.payload
          };
          break;
        case "setAge":
          console.log("SetAge", action);
          state = {
            ...state,
            Age: action.payload
          };
          break;
        default:
      }
      return state;
    };

    const Employee_reducer = (state = state_start, action) => {
      switch (action.type) {
        case "ADD":
          state = {
            ...state,
            result: state.result + action.payload,
            value: [...state.value, state.result + action.payload]
          };
          console.log(state);
          break;
        case "SUBTRACT":
          // state -=action.palyload;
          break;
        default:
      }
      return state;
    };
    // const store = createStore(Employee_reducer)
    // const store = createStore(combineReducers({Employee_reducer,user_reducer}))
    const mylogger = store => next => action => {
      console.log("Log Action", action);
      next(action);
    };

    const store = createStore(
      combineReducers({ emp: Employee_reducer, user: user_reducer }),
      {},
      applyMiddleware(mylogger)
    );
    
    store.subscribe(() => {
      console.log("Update Stroe:", store.getState());
    });
    console.log(store.getState(), "Store");
    console.log(store,'store-raw');
    return (
      <Provider store={store}>
        <Home></Home>
      </Provider>
    );
  }
}

export default App;
