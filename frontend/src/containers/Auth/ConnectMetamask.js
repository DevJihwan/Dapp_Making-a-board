import React, { Component } from 'react';
import {useHistory, withRouter} from 'react-router-dom';
import { AuthContent, InputWithLabel, RightAlignedLink, ConnectButton, ConnectAnimation } from 'components/Auth';
import getWeb3 from "containers/Auth/getWeb3";
import Cultural from 'contracts/Cultural';
import axios from "axios";

class ConnectMetamask extends Component {

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
        //Register.js에서 보낸 사용자 ID를 변수에 저장 
        const getParams = this.props.location.state.state; 
        console.log("STEP0-0.#### getParams #### : "+getParams);

        this.setState({
            userId: getParams
        });

        console.log("STEP0-1.#########START componetDidMount######## : "+this.state.userId);
        //getWeb3.js에서 결과를 리턴 받는다. 
        getWeb3.then(results => {
            console.log("STEP0-2.#########componetDidMount : results########"+results);
            //받은 결과를 let web3에 저장
            this.setState({
            web3: results
            });
            console.log("STEP0-3.##########END componetDidMount########");
    }).catch(() => {
        console.log("STEP0-E.Error finding web3.");
    });
    }

      //화면에서 Onclick Event로 메타마스크 주소를 State에 저장
    getMetaMaskAddress = async() => {
        console.log("STEP1-0.######### START getMetaMaskAddress ########");
        let _metaAccount;

        _metaAccount = this.state.web3.currentProvider.selectedAddress;
        console.log("STEP1-1.######### getMetaMaskAddress : _metaAccount ########"+_metaAccount);

        console.log("STEP1-2.######### getMetaMaskAddress : this.state.userId ########"+this.state.userId);


        // this.setState({
        // userAccount: _metaAccount
        // });

        // console.log("#########Step02.getMetaMaskAddress : this.state.userAccount########"+this.state.userAccount);

        this.instantiateContract()
        .then(result => {
            console.log("STEP2-0.##### START instantiateContract ##### : " + result);
            this.insertMetaMaskAddress(_metaAccount);
        })
        .then(result => {
            console.log("STEP2-1.########## instantiateContract + this.state.web3######## : "+this.state.web3);
            this.props.history.push('/auth/Congrat', {state: this.state.web3});
        }).catch(e =>{
            console.log("STEP2-e.##### .then ERROR ##### : "+e);
        })
        console.log("STEP2-2.########## END instantiateContract ########");
    }

      //회원가입 시 토큰을 전송하기위한 스마트컨트랙트 인스턴트 생성
    instantiateContract = async() => {
        console.log("STEP3-0.########## START instantiateContract ########");

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

    insertMetaMaskAddress = async(address) => {
        console.log("STEP4-0.########## START insertMetaMaskAddress ########");

        let id = this.state.userId;

        const submitResults = await axios.post(
            //API URL
            '/user/metamask',
            //Parameter Data
            {
                userId:id,
                metaMaskAddress:address
            }
            ).then((response) => {
                console.log("STEP4-1.########## insertMetaMaskAddress DB insert Complete ########"+response);
            })

        console.log("STEP4-2.########## END insertMetaMaskAddress ########"+submitResults);

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

export default withRouter(ConnectMetamask);