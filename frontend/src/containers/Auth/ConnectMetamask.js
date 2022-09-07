import React, { Component } from 'react';
import { AuthContent, InputWithLabel, AuthButton, RightAlignedLink, ConnectButton } from 'components/Auth';

class ConnectMetamask extends Component {
    render() {
        return (
            <AuthContent title="Connect Your Metamask Wallet">
                <InputWithLabel label="MetamaskAddress" name="email" placeholder="WalletAddress"/>
                <ConnectButton>Connect</ConnectButton>
                <RightAlignedLink to="/auth/register">회원가입</RightAlignedLink>
            </AuthContent>
        );
    }
}

export default ConnectMetamask;