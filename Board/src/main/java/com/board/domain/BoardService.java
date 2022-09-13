package com.board.domain;

public interface BoardService {

    /*
     * private Long id;
     * 
     * private String title;
     * 
     * private String article;
     * 
     * private String tags;
     * 
     * private String agree_cnt;
     * 
     * private Boolean status;
     */

    Board registerBoad(String writer_userid, String title, String article, String tags);

    Board deleteBoard(String title);

    void agreeBoard(String title);

}
