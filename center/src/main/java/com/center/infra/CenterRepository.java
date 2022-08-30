package com.center.infra;

import java.util.Optional;

import org.springframework.data.repository.CrudRepository;
import org.springframework.web.bind.annotation.RestController;

import com.center.domain.Center;

@RestController
public interface CenterRepository extends CrudRepository<Center, String> {

    Optional<Center> findBycenter(String address);

}