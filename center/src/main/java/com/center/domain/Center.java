package main.java.com.center.domain;

import javax.persistence.*;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name = "center")
@Data
@Getter
@Setter
public class Center {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    private String name;

    private String address;

    private String lecture_nm;

    private String lecture_fee;

    private String lecture_limit_number;

    private Boolean status;

}