import React, { Component } from 'react';
import { CongratAnimation } from 'components/Auth';
import {useHistory, withRouter} from 'react-router-dom';
import getWeb3 from "containers/Auth/getWeb3";
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

    /*
    //Step01. 화면을 그릴때 사용자의 Metamask 연결 확인 및 주소 확인 
    componentDidMount() {
        console.log("#########START Congrat componetDidMount########");

        const getWeb3 = this.props.location.state.state; 
        console.log("#### getParams #### : "+getWeb3);


        this.instantiateContract()
        .then(result => {
            this.initApprove();
            console.log("###### instantiateContract ###### : " + result);
        });
        
        console.log("##########END Congrat componetDidMount########");
   
    }

    //회원가입 시 토큰을 전송하기위한 스마트컨트랙트 인스턴트 생성
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

    initApprove = async() => {
        console.log("##########START initApprove########");
    
        //const masterAddress = window.ethereum.selectedAddress;
        const masterAddress = "0xc17ff54a781d0959c56dfe1fa2fc3613715470cb";
        const amount = '100000000000000000000';
      
        /*
        * approve
        */
        /*
        await this.state.userContractInstance.approve(this.state.userAccount, amount, {from: masterAddress})
            .then(result=>{
              console.log("#########+Approve Complete#########"+result);
            })
    
        console.log("##########START initApprove########");
      }
      */

    render() {
        return (
            <CongratAnimation title="로그인">

            </CongratAnimation>
        );
    }
}

export default Congrat;