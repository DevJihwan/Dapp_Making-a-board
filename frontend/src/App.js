import React, { Component } from "react";
import logo from './logo.svg';
import './App.css';
import getWeb3 from "./getWeb3.js";
import axios from "axios";
import Cultural from './contracts/Cultural.json';


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

    this.instantiateContract();
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
  }

  instantiateContract = async() => {
    console.log("##########START instantiateContract########");

      //스마트컨트랙트 불러오기 
      const contract = require("@truffle/contract");
      const loginToken = contract(Cultural);

      loginToken.setProvider(this.state.web3.currentProvider);

      //스마트컨트랙트 인스턴스 생성
      await loginToken.deployed()
        .then(instance => {
          this.setState({
            userContractInstance: instance
          }); 
        });
  }

  sendToken = async() => {

    console.log("##########START sendToken########");

    //const masterAddress = window.ethereum.selectedAddress;
    const masterAddress = "0xc17ff54a781d0959c56dfe1fa2fc3613715470cb";
    const amount = '100000000000000000000';
    //const ToAddress = '0xde02bfc66bae5570e08651fe7a9faa43b8c5adaa';


    console.log("#########masterAddress########"+masterAddress);

    /*
    * balance check
    */
    // await this.state.userContractInstance.balanceOf(      
    //   masterAddress
    // ).then(result => {
    //   console.log("#########Master Approve########"+result);
    // });

    /*
    * approve
    */
    // await this.state.userContractInstance.approve
    //   (this.state.userAccount, amount, {from: masterAddress});
     
    console.log("#########this.state.userAccount########"+this.state.userAccount);

    await this.state.userContractInstance.transferFrom(masterAddress, this.state.userAccount, amount, {from : masterAddress})  
    .then(result => {
      console.log("Transfer Complete#########"+result);
    })
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
