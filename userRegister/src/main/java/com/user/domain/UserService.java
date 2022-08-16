package com.user.domain;

public interface UserService {

    User joinUser(String name, String age, String address);
    User findUser(String name);


    //User deleteUser(String name);

}
