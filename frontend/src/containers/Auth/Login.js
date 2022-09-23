import React, { Component } from 'react';
import { AuthContent, InputWithLabel, AuthButton, RightAlignedLink } from 'components/Auth';
import axios from "axios";

class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
          userId: null,
          userPw: null,
        };
    }

    handleChange = (e) => {
        console.log("##########START handleChange########");
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    //State에 저장한 주소와 회원정보를 백엔드 API호출하여 DB에 저장한다. 
    checkID = async() => {
        console.log("##########START checkID########");

        let id = this.state.userId;
        let pw = this.state.userPw;

        console.log("########## checkID ######## : "+ id);
        const submitResults = await axios.get(
        //API URL
        '/user/find',
        {params: {userId:id}}
        )
        .then((response) => {
            console.log("########## DB checkID Complete ########"+response);
            this.props.history.push('/board/Register', {state: this.state.userId});
        })
        .catch((error) => {
            console.log("########## checkID error ########"+error);
        })

        // this.initApprove();
        console.log("##########END checkID########"+submitResults);

    }

    render() {
        return (
            <AuthContent title="로그인">
                <InputWithLabel onChange={this.handleChange} value={this.state.userId} label="아이디" name="userId" placeholder="아이디"/>
                <InputWithLabel onChange={this.handleChange} value={this.state.userPw} label="비밀번호" name="userPw" placeholder="비밀번호" type="password"/>
                <AuthButton onClick={() => this.checkID()}>로그인</AuthButton>
                <RightAlignedLink to="/auth/register">회원가입</RightAlignedLink>
            </AuthContent>
        );
    }
}

export default Login;