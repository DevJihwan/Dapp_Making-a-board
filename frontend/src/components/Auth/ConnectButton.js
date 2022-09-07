import React from 'react';
import styled from 'styled-components';
import oc from 'open-color';
import { shadow } from 'lib/styleUtils';
import getWeb3 from 'components/Auth/getWeb3.js';


//화면에서 Onclick Event로 메타마스크 주소를 State에 저장
const getMetaMaskAddress = async() => {
    console.log("#########START getMetaMaskAddress########");
    let _metaAccount;

    _metaAccount = window.web3.currentProvider;
    console.log("#########Step02.getMetaMaskAddress : _metaAccount########"+_metaAccount);

    // this.setState({
    //   userAccount: _metaAccount
    // });

    this.instantiateContract();
    console.log("##########END getMetaMaskAddress########");
  }

const Wrapper = styled.div`
    margin-top: 1rem;
    padding-top: 0.6rem;
    padding-bottom: 0.5rem;

    background: ${oc.teal[6]};
    color: white;

    text-align: center;
    font-size: 1.25rem;
    font-weight: 500;

    cursor: pointer;
    user-select: none;
    transition: .2s all;

    &:hover {
        background: ${oc.teal[5]};
        ${shadow(0)}
    }

    &:active {
        background: ${oc.teal[7]};
    }

`;

const ConnectButton = async({children, onClick}) => (
    <Wrapper onClick={onClick}>
        {children}
    </Wrapper>
);

export default ConnectButton;