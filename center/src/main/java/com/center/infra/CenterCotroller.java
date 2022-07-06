package main.java.com.center.infra;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import main.java.com.center.domain.*;

@RestController
@RequestMapping(value = "/center")
@Transactional
public class CenterCotroller {

    @Autowired
    CenterService centerservice;

    @PostMapping("/open")
    public void openCenterSvc(@RequestBody Center data) {
        System.out.println("##########################Center Controller : opne Center Start###########################");
        centerservice.openCenter(data.getName(), data.getAddress());
        System.out.println("##########################Center Controller : opne Center End###########################");
    }


}

    
    