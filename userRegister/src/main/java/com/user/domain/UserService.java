package com.user.domain;

public interface UserService {

    User joinUser(String userId, String userPw, String userEmail, String MetaMaskAddress);

    User findUser(String userId);

    // User deleteUser(String name);

}
