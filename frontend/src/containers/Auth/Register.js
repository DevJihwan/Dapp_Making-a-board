import React, { Component } from 'react';
import {useHistory, withRouter} from 'react-router-dom';
import { AuthContent, InputWithLabel, AuthButton, RightAlignedLink } from 'components/Auth';
import axios from "axios";

class Register extends Component {

    constructor(props) {
        super(props);
        this.state = {
          userAccount: null,
          userName: null,
          userId: null,
          userPw: null,
          userEmail: null,
          userToken: null,
          web3:null,
          userContractInstance:null
        };
    }


    handleChange = (e) => {
        console.log("##########START handleChange########");
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    //State에 저장한 주소와 회원정보를 백엔드 API호출하여 DB에 저장한다. 
    submitInfo = async() => {
        console.log("##########START submitInfo########");

        let id = this.state.userId;
        let pw = this.state.userPw;
        let email = this.state.userEmail;
        let account = this.state.userAccount;

        console.log("########## submitInfo ######## : "+ id);
        const submitResults = await axios.post(
        //API URL
        '/user/join',
        //Parameter Data
        {
            userId:id,
            userPw:pw,
            userEmail:email,
            metaMaskAddress:""
        }
        ).then((response) => {
            console.log("########## submitInfo DB insert Complete ########"+response);
            this.props.history.push('/auth/ConnectMetamask', {state: this.state.userId});
        })

        // this.initApprove();
        console.log("##########END submitInfo########"+submitResults);

    }  


    render() {
        return (
            <AuthContent title="회원가입">
                <InputWithLabel onChange={this.handleChange} value={this.state.userEmail} label="이메일" name="userEmail" placeholder="이메일"/>
                <InputWithLabel onChange={this.handleChange} value={this.state.userId} label="아이디" name="userId" placeholder="아이디"/>
                <InputWithLabel onChange={this.handleChange} value={this.state.userPW} label="비밀번호" name="userPw" placeholder="비밀번호" type="password"/>
                <InputWithLabel label="비밀번호 확인" name="passwordConfirm" placeholder="비밀번호 확인" type="password"/>
                <AuthButton onClick={() => this.submitInfo()}>회원가입</AuthButton>
                <RightAlignedLink to="/auth/login">로그인</RightAlignedLink>
            </AuthContent>
        );
    }
}

export default withRouter(Register);

