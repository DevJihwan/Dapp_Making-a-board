package com.user.infra;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.user.domain.User;
import com.user.domain.UserService;

@RestController
@RequestMapping(value = "/user")
@Transactional
public class UserController {

    @Autowired
    UserService userservice;

    @PostMapping("/join")
    public void joinUserSvc(@RequestBody User data) {
        System.out.println("##########################User Controller : Create User Start###########################");
        System.out.println("##########################getMetaMaskAddress###########################"+data.getMetaMaskAddress());
        userservice.joinUser(data.getName(), data.getAge(), data.getAddress(), data.getMetaMaskAddress());
        System.out.println("##########################User Controller : Create User End###########################");
    }

    @GetMapping("/find")
    public String finfUserSvc(@RequestBody User data) {
        System.out.println("##########################User Controller : Find User Start###########################");
        User user = userservice.findUser(data.getName());

        String userName = user.getName();
        
        System.out.println("##########################User Controller : Find User End###########################" + userName);

        return userName;
        
    }

}
