package main.java.com.center.infra;

import main.java.com.center.domain.*;
import java.util.Optional;

import org.springframework.data.repository.CrudRepository;
import org.springframework.web.bind.annotation.RestController;

@RestController
public interface CenterRepository extends CrudRepository<Center, String>  {

    Optional<Center> findBycenter(String address);

}