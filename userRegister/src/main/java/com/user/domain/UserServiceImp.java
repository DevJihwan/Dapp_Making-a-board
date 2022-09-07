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

    public User joinUser(String userId, String userPw, String userEmail, String MetaMaskAddress) {
        System.out.println("##########################User Service : Create User Start###########################");
        User user = new User();

        user.setUserId(userId);
        user.setUserPw(userPw);
        user.setUserEmail(userEmail);
        user.setStatus(true);
        user.setMetaMaskAddress(MetaMaskAddress);

        userRepository.save(user);

        System.out.println("##########################User Service : Create User End###########################");

        return user;

    }

    public User findUser(String userId) {
        System.out.println("##########################User Service : Find User Start###########################");
        Optional<User> userOptional = userRepository.findByuserId(userId);
        User user = userOptional.get();

        System.out.println("##########################User Service : Find User Start###########################");

        return user;
    }

    // 회원가입 후 같은 row에 메타마스크 지갑주소 업데이트
    public void registerMetamask(String userId, String metaMaskAddress) {
        System.out
                .println("##########################User Service : registerMetamask START###########################");

        Optional<User> userOptional = userRepository.findByuserId(userId);
        User user = userOptional.get();
        user.setMetaMaskAddress(metaMaskAddress);

        userRepository.save(user);

        System.out
                .println("##########################User Service : registerMetamask END###########################");

    }

}
