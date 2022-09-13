package com.board.domain;

import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.center.infra.BoardRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class BoardServiceImp implements BoardService {

    @Autowired
    private final BoardRepository boardRepository;

    // Board registerBoad(String title, String article, String tags);
    public Board registerBoad(String writer_userid, String title, String article, String tags) {
        System.out.println("##########################Board Service : registerBoad START###########################");
        Board board = new Board();

        board.setWriter_userid(writer_userid);
        board.setTitle(title);
        board.setArticle(article);
        board.setTags(tags);

        // 최초 게시글 등록시에는 공감수 0으로 시작.
        String cnt = "0";
        board.setAgree_cnt(cnt);

        boardRepository.save(board);

        System.out.println("##########################Board Service : registerBoad End###########################");

        return board;

    }

}
