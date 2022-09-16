package com.board.infra;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.board.domain.Board;
import com.board.domain.BoardService;
import com.board.domain.AgreeInfo;

@RestController
@RequestMapping(value = "/board")
@Transactional
public class BoardCotroller {

    @Autowired
    BoardService boardservice;

    @PostMapping("/register")
    public void registerBoadSvc(@RequestBody Board data) {
        System.out
                .println("##########################Board Controller : registerBoad Start###########################"
                        + data.getArticle() + data.getTitle());

        // Board registerBoad(String title, String article, String tags);
        boardservice.registerBoad(data.getWriter_userid(), data.getTitle(), data.getArticle(), data.getTags());
        System.out.println("##########################Board Controller : registerBoad End###########################");
    }

    @PostMapping("/delete")
    public void deleteBoardSvc(@RequestBody Board data) {
        System.out
                .println("##########################Board Controller : deleteBoardSvc Start###########################"
                        + data.toString());

        // Board registerBoad(String title, String article, String tags);
        boardservice.deleteBoard(data.getTitle());
        System.out
                .println("##########################Board Controller : deleteBoardSvc End###########################");
    }

    @PostMapping("/agree")
    public void agreeBoardSvc(@RequestBody AgreeInfo data) {
        System.out
                .println("##########################Board Controller : agreeBoardSvc Start###########################"
                        + data.toString());

        // Board registerBoad(String title, String article, String tags);
        boardservice.agreeBoard(data.getTitle(), data.getAgreeUserid());
        System.out.println("##########################Board Controller : agreeBoardSvc End###########################");
    }

}
