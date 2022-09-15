package main.java.com.board.infra;

import java.util.Optional;

import org.springframework.data.repository.CrudRepository;
import org.springframework.web.bind.annotation.RestController;

import main.java.com.board.domain.BoardAgree;

@RestController
public interface BoardAgreeRepository extends CrudRepository<BoardAgree, String> {

    Optional<BoardAgree> findBytitle_no(String title_no);

}