package com.board.infra;

import java.util.Optional;

import org.springframework.data.repository.CrudRepository;
import org.springframework.web.bind.annotation.RestController;

import com.board.domain.Board;

@RestController
public interface BoardRepository extends CrudRepository<Board, String> {

    Optional<Board> findBytitle(String title);

}