package com.board.domain;

import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.board.infra.BoardRepository;
import main.java.com.board.infra.BoardAgreeRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class BoardServiceImp implements BoardService {

    @Autowired
    private final BoardRepository boardRepository;
    private final BoardAgreeRepository boardAgreeRepository;

    // Board registerBoad(String title, String article, String tags);
    public Board registerBoad(String writer_userid, String title, String article, String tags) {
        System.out.println("##########################Board Service : registerBoad START###########################");

        Board board = new Board();
        BoardAgree boardAgree = new BoardAgree();

        // 제목과 내용이 모두 있는 경우만 등록
        if (title.isEmpty() || article.isEmpty() || title == null || article == null) {

            System.out.println(
                    "##########################Board Service : ERROR########################### : 제목 또는 내용이 부적합합니다.");

        } else {

            /*
             * Board Table Insert
             */
            board.setWriter_userid(writer_userid);
            board.setTitle(title);
            board.setArticle(article);
            board.setTags(tags);

            // 최초 게시글 등록시에는 공감수 0으로 시작.
            String cnt = "0";
            board.setAgree_cnt(cnt);

            // 최초 게시글 상태는 정상(true) 표시
            board.setStatus(true);

            boardRepository.save(board);

            /*
             * Board Agree Table insert (create row)
             */
            String _title_no = Long.toString(board.getId());
            boardAgree.setTitle_no(_title_no);
            boardAgree.setWriter_userid(writer_userid);
            boardAgree.setBoardstatus(true);

            boardAgreeRepository.save(boardAgree);

        }

        System.out.println("##########################Board Service : registerBoad End###########################");

        return board;

    }

    // Board deleteBoard(String title);
    public Board deleteBoard(String title) {
        System.out.println("##########################Board Service : deleteBoard START###########################");

        Optional<Board> boardOptional = boardRepository.findBytitle(title);
        Board board = boardOptional.get();

        // 상태값을 바꿔줌
        board.setStatus(false);

        boardRepository.save(board);

        System.out.println("##########################Board Service : deleteBoard END###########################");

        return board;
    }

    public void agreeBoard(String title, String agree_userid) {
        System.out.println("##########################Board Service : agreeBoard START###########################");

        Optional<Board> boardOptional = boardRepository.findBytitle(title);
        Board board = boardOptional.get();

        /*
         * Board Table Update
         */
        // DB에 저장되어 있는 값을 불러옴.
        String cnt = board.getAgree_cnt();
        // +1을 해주기 위해 int로 전환
        int agreeCnt = Integer.parseInt(cnt);
        // +1하면서 다시 셋팅
        board.setAgree_cnt(Integer.toString(++agreeCnt));

        boardRepository.save(board);

        System.out.println("##########################Board Service : agreeBoard END###########################");

    }

}
