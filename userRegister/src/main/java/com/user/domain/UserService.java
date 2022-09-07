package com.user.domain;

public interface UserService {

    User joinUser(String userId, String userPw, String userEmail, String MetaMaskAddress);

    User findUser(String userId);

    void registerMetamask(String userId, String metaMaskAddress);

    // User deleteUser(String name);

}
