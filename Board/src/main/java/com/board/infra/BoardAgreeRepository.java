package com.board.infra;

import java.util.Optional;

import org.springframework.data.repository.CrudRepository;
import org.springframework.web.bind.annotation.RestController;

import com.board.domain.BoardAgree;

@RestController
public interface BoardAgreeRepository extends CrudRepository<BoardAgree, String> {

    Optional<BoardAgree> findBytitleNo(String titleNo);

}