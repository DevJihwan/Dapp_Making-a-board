package com.board.domain;

import java.security.Timestamp;
import java.time.LocalDate;

import javax.swing.text.StyledEditorKit.BoldAction;

import lombok.Data;

//@Entity
@Data
public class AgreeInfo {

    // private Timestamp agreeDate;

    private String title;

    private String agreeUserid;

    private Boolean agreeUserStatus;

}
