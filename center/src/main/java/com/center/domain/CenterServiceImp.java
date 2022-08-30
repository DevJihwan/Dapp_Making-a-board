package com.center.domain;

import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.center.infra.CenterRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class CenterServiceImp implements CenterService {

    @Autowired
    private final CenterRepository centerRepository;

    public Center openCenter(String name, String address) {
        System.out.println("##########################Center Service : open Center Start###########################");
        Center center = new Center();

        center.setName(name);
        center.setAddress(address);

        centerRepository.save(center);

        System.out.println("##########################Center Service : open Center End###########################");

        return center;

    }

}
