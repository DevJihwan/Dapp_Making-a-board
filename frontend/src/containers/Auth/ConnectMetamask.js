import React, { Component } from 'react';
import { AuthContent, InputWithLabel, RightAlignedLink, ConnectButton, ConnectAnimation } from 'components/Auth';
import getWeb3 from "containers/Auth/getWeb3";
import Cultural from 'contracts/Cultural';

class ConnectMetamask extends Component {

    constructor(props) {
        super(props);
        this.state = {
          userAccount: null,
          userToken: null,
          web3:null,
          userContractInstance:null
        };
      }

    //Step01. 화면을 그릴때 사용자의 Metamask 연결 확인 및 주소 확인 
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

      //화면에서 Onclick Event로 메타마스크 주소를 State에 저장
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

    render() {
        return (
            <AuthContent title="Connect Your Metamask Wallet">
                <InputWithLabel label="MetamaskAddress" name="email" placeholder="WalletAddress"/>
                <ConnectButton onClick={() => this.getMetaMaskAddress()}>Connect</ConnectButton>
                <RightAlignedLink to="/auth/register">회원가입</RightAlignedLink>
                <ConnectAnimation></ConnectAnimation>
            </AuthContent>
            );
        }
}

export default ConnectMetamask;