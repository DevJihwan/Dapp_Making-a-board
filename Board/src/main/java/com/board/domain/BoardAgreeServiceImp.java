package main.java.com.board.domain;

import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import main.java.com.board.infra.BoardAgreeRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class BoardAgreeServiceImp implements BoardAgreeService {

    @Autowired
    private final BoardAgreeRepository boardAgreeRepository;

    /*
     * // Board plusAgree(String title_id, String writer_userid, String
     * agree_userid);
     * 
     * public BoardAgree plusAgree(String title_no, String writer_userid, String
     * agree_userid) {
     * 
     * Optional<BoardAgree> boardAgreeOptional =
     * boardAgreeRepository.findBytitle_no(title_no);
     * BoardAgree boardAgree = boardAgreeOptional.get();
     * 
     * }
     * 
     * // Board getAgree(String title_id, String writer_userid);
     * 
     * public BoardAgree getAgree(String title_no, String writer_userid) {
     * 
     * }
     */
}