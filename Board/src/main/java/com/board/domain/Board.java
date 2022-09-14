package com.board.domain;

import javax.persistence.*;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name = "board")
@Data
@Getter
@Setter
public class Board {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    private String title;

    private String writer_userid;

    private String article;

    private String tags;

    private String agree_cnt;

    private Boolean status;

}