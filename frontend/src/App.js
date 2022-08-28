import React, { Component } from "react";
import logo from './logo.svg';
import './App.css';
import getWeb3 from "./getWeb3.js";
import axios from "axios";
//import LoginContract from '../smartContract/contracts/SampleToken.sol';
import LoginContract from './contracts/LoginContract.json';


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      userAccount: null,
      userToken: null,
      web3:null,
      userContractInstance:null
    };
  }

  componentDidMount() {
    console.log("#########START componetDidMount########");
    //getWeb3.js에서 결과를 리턴 받는다. 
    getWeb3.then(results => {
        console.log("#########Step01.componetDidMount : results########"+results);
        //받은 결과를 let web3에 저장
        this.setState({
          web3: results
        });
        console.log("##########END componetDidMount########");
   }).catch(() => {
       console.log("Error finding web3.");
   });
}

  getMetaMaskAddress = async() => {
    console.log("#########START getMetaMaskAddress########");
    let _metaAccount;

    _metaAccount = this.state.web3.currentProvider.selectedAddress;
    console.log("#########Step02.getMetaMaskAddress : _metaAccount########"+_metaAccount);

    this.setState({
      userAccount: _metaAccount
    });
    console.log("##########END getMetaMaskAddress########");
  }

  submitInfo = async() => {
    console.log("##########START submitInfo########");

    let account = this.state.userAccount;

    const submitResults = await axios.post(
      //API URL
      '/user/join',
      //Parameter Data
      {
        name:"Test",
        age:"33",
        address:"Test",
        metaMaskAddress:account

      }
    )
    console.log("##########END submitInfo########"+submitResults);

    // axios.get('/users')
    //   .then((data) => {console.log("#$"+data.data)})
    //   .catch((Error) => {console.log(Error)})

  }

  sendToken = async() => {
      console.log("##########START sendToken########");

      const contract = require("@truffle/contract");
      const loginToken = contract(LoginContract);

      console.log("##########TEST########"+contract);
      //console.log("##########START sendToken########");

      await loginToken.deployed()
        .then(instance => {
          this.setState({
            userContractInstance: instance
          });
        });

      // await this.state.userContractInstance.Register(
      //   { from: this.state.userAccount
      //     value: 

      //   }

      // );

    }

  render(){
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          {/* <p>
            Edit <code>src/App.js</code> and save to reload.
          </p> */}
          <button 
            className="App-link"
            onClick = {() => this.getMetaMaskAddress()}
          >
            Get MetaMask Address
          </button>

          <button 
            className="submit"
            onClick = {() => this.submitInfo()}
          >
            Submit your account
          </button>
          <button 
            className="sendToken"
            onClick = {() => this.sendToken()}
          >
            Send DWT Token
          </button>
        </header>
      </div>
    );
  }
}

export default App;
