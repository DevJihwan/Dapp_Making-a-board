// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract LoginContract {

    mapping (address=>uint16) userToken;
    // 회원가입이 완료되면 가입한 회원 지갑으로 DWT를 전송합니다.
    function Register() payable  external {
        userToken[msg.sender]++;
    }

    // 사용자가 보유한 Token 갯수를 반환합니다.
    function getuserToken() view external returns(uint16) {
        return userToken[msg.sender];
    }
}