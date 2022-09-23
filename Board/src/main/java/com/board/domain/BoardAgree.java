package com.board.domain;

import javax.persistence.*;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;

import com.board.domain.AgreeInfo;
import com.vladmihalcea.hibernate.type.json.*;
import org.hibernate.annotations.TypeDef;
import org.hibernate.annotations.Type;

@Entity
@Table(name = "boardagree")
@Data
@TypeDef(name = "json", typeClass = JsonStringType.class)
public class BoardAgree {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @Column(name = "title_no")
    private String titleNo;

    private String writer_userid;

    @Type(type = "json")
    @Column(name = "agreeInfo", columnDefinition = "json")
    private AgreeInfo agreeInfo;

    private String cnt;

    private boolean board_status;

}
