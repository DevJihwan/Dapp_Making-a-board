package com.board.domain;

import javax.persistence.*;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name = "boardagree")
@Data
public class BoardAgree {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    private String writer_userid;

    private String agree_userid;

    private String cnt;

    private boolean board_status;

}
