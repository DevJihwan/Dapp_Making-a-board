package com.user.infra;

import com.user.domain.User;
import java.util.Optional;

import org.springframework.data.repository.CrudRepository;
import org.springframework.web.bind.annotation.RestController;

@RestController
public interface UserRepository extends CrudRepository<User, String> {

    Optional<User> findByname(String name);

}