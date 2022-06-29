package com.user.infra;

import java.util.Optional;

import org.springframework.data.repository.CrudRepository;
import org.springframework.web.bind.annotation.RestController;

import com.user.domain.User;

@RestController
public interface UserRepository extends CrudRepository<User, String> {

    Optional<User> findByname(String name);

}
