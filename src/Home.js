import React, { Component } from "react";
import User from "./User";
import { connect } from "react-redux";
const mapStatetoProps = state => { // ตัวแรกเป็น state
  console.log(state, "state");
  return { 
    user: state.user,
    emp: state.emp,
  }
    // return state
};


const mapDispatchtoProps = (dispatch) => { // ตัวที่2 เป็น dispatch
    console.log(dispatch,'dispatch');
  return {
    setName: name => {
      dispatch({
        type: "setName",
        payload: name
      });
    },
    setAge: age=>{
        dispatch({
          type:"setAge",
          payload:age
        })
    }
  };
};
class Home extends Component {
     componentDidMount(){
        console.log(this.props,'xxxx');
     }
  render() {
    return (
      //   <div>Home</div>
      <div>
        <User username={this.props.user.name} age ={this.props.user.Age}  gg={this.props} />
        <button onClick={() => this.props.setName("Next")}>change Name</button><br/>
        <button  onClick={()=>this.props.setAge(100)} >Change Age</button>
      </div>
    );
  }
}

// export default Home
export default connect(mapStatetoProps,mapDispatchtoProps)(Home); // เป็นการ mapstate redux กับตัว component ค่าที่ return ใน function mapstate จะส่งค่าที่ function return ไปที่ props
