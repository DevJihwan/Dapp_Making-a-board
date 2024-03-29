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
        System.out
                .println("##########################User Controller ########################### : " + data.getUserId());
        userservice.joinUser(data.getUserId(), data.getUserPw(), data.getUserEmail(), data.getMetaMaskAddress());
        System.out.println("##########################User Controller : Create User End###########################");
    }

    @PostMapping("/metamask")
    public void registerMetamaskSvc(@RequestBody User data) {
        System.out.println(
                "##########################User Controller : registerMetamaskSvc Start###########################");
        System.out
                .println("##########################User Controller ########################### : "
                        + data.getMetaMaskAddress());
        userservice.registerMetamask(data.getUserId(), data.getMetaMaskAddress());
        System.out.println("##########################User Controller : Create User End###########################");
    }

    @GetMapping("/find")
    public String finfUserSvc(@RequestParam(name = "userId") String id) {
        System.out.println("##########################User Controller : Find User Start###########################");
        User user = userservice.findUser(id);

        String userName = user.getUserId();

        System.out.println(
                "##########################User Controller : Find User End###########################" + userName);

        return userName;

    }

}
