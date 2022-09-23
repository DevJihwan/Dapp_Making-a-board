import React, { Component } from 'react';
import { CongratAnimation, RightAlignedLink } from 'components/Auth';
import {useHistory, withRouter} from 'react-router-dom';
import Cultural from 'contracts/Cultural';

class Congrat extends Component {

    constructor(props) {
        super(props);
        this.state = {
          userAccount: null,
          userName: null,
          userId: null,
          web3:null,
          userContractInstance:null
        };
      }

    
    //Step01. 화면을 그릴때 사용자의 Metamask 연결 확인 및 주소 확인 
    componentDidMount() {
        console.log("STEP0-0.######### START Congrat componetDidMount ########");

        const _Web3 = window.web3.currentProvider
        console.log("STEP0-1.#### web3 #### : "+_Web3);

        this.instantiateContract(_Web3)
        .then(result => {
            this.initApprove();
            console.log("STEP0-2.###### instantiateContract ###### : " + result);
        })
        .then(result => {
            this.sendToken();
            console.log("STEP0-2.###### instantiateContract ###### : " + result);
        })

   
    }
 
    //회원가입 시 토큰을 전송하기위한 스마트컨트랙트 인스턴트 생성
    instantiateContract = async(web3) => {
        console.log("STEP1-0.########## START instantiateContract ########");

        //스마트컨트랙트 불러오기 
        const contract = require("@truffle/contract");
        const loginToken = contract(Cultural);

        loginToken.setProvider(web3);

        //스마트컨트랙트 인스턴스 생성
        await loginToken.deployed()
            .then(instance => {
            this.setState({
                userContractInstance: instance,
                userAccount:web3.selectedAddress
            }); 
            });
    }

    initApprove = async() => {
        console.log("STEP2-0. ########## START initApprove ########");
    
        //const masterAddress = window.ethereum.selectedAddress;
        const masterAddress = "0xc17ff54a781d0959c56dfe1fa2fc3613715470cb";
        const ToAddress = '0xde02bfc66bae5570e08651fe7a9faa43b8c5adaa';
        const amount = '100000000000000000000';
      
        /*
        * approve
        */
        await this.state.userContractInstance.approve(ToAddress, amount, {from: masterAddress})
            .then(result=>{
              console.log("STEP2-1. ######### Approve Complete #########"+result);
            })
    
        console.log("STEP2-2. ########## END initApprove ########");
      }

      sendToken = async() => {

        const masterAddress = "0xc17ff54a781d0959c56dfe1fa2fc3613715470cb";
        const ToAddress = '0xde02bfc66bae5570e08651fe7a9faa43b8c5adaa';
        const amount = '100000000000000000000';

        await this.state.userContractInstance.transfer(ToAddress, amount, {from : masterAddress})  
        .then(result => {
          console.log("######### Transfer Complete#########"+result);
        })
      }


    render() {
        return (
            <CongratAnimation title="로그인">
                
            </CongratAnimation>
        );
    }
}

export default Congrat;