package com.board.infra;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.board.domain.Board;
import com.board.domain.BoardrService;

@RestController
@RequestMapping(value = "/board")
@Transactional
public class BoardCotroller {

    @Autowired
    BoardService boardservice;

    @PostMapping("/register")
    public void registerBoadSvc(@RequestBody Center data) {
        System.out
                .println("##########################Board Controller : registerBoad Start###########################");

        // Board registerBoad(String title, String article, String tags);
        boardservice.registerBoad(data.getWriter_userid(), data.getTitle(), data.getAticle(), data.getTags());
        System.out.println("##########################Board Controller : registerBoad End###########################");
    }

}
