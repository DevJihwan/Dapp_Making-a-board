package com.user.domain;

public interface UserService {

    User joinUser(String name, String age, String address, String MetaMaskAddress);
    User findUser(String name);


    //User deleteUser(String name);

}
