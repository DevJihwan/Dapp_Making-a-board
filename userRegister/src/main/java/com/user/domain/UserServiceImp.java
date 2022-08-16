package com.user.domain;

import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.user.infra.UserRepository;
import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class UserServiceImp implements UserService {

    @Autowired
    private final UserRepository userRepository;

    public User joinUser(String name, String age, String address) {
        System.out.println("##########################User Service : Create User Start###########################");
        User user = new User();
        
        user.setName(name);
        user.setAge(age);
        user.setAddress(address);
        user.setStatus(true);

        userRepository.save(user);

        System.out.println("##########################User Service : Create User End###########################");

        return user;

    }

    public User findUser(String name){
        System.out.println("##########################User Service : Find User Start###########################");
        Optional<User> userOptional = userRepository.findByname(name);
        User user = userOptional.get();

        System.out.println("##########################User Service : Find User Start###########################");

        return user;
    }

}
