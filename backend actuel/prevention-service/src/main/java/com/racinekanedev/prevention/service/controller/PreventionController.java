package com.racinekanedev.prevention.service.controller;

import com.racinekanedev.prevention.service.domain.PreventionStatus;
import com.racinekanedev.prevention.service.mapper.PreventionMapper;
import com.racinekanedev.prevention.service.modal.Prevention;
import com.racinekanedev.prevention.service.modal.PreventionReport;
import com.racinekanedev.prevention.service.payload.dto.CreatePreventionRequest;
import com.racinekanedev.prevention.service.payload.dto.PreventionDTO;
import com.racinekanedev.prevention.service.payload.dto.UserDTO;
import com.racinekanedev.prevention.service.service.PreventionService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/preventions")
public class PreventionController {


    private final PreventionService preventionService;
    private final JavaMailSender mailSender;
    private final PreventionMapper preventionMapper;

    @PostMapping
    public ResponseEntity<Prevention> createPrevention(@RequestBody CreatePreventionRequest prevention) throws Exception {

        UserDTO user = new UserDTO();
        user.setId(1L);

        Prevention savedPrevention = preventionService.createPrevention(prevention,user);

        return ResponseEntity.ok(savedPrevention);
    }



    @GetMapping("/user")
    public ResponseEntity<Set<PreventionDTO>> getPreventionsByUser(){

        List<Prevention> preventions = preventionService.getPreventionsByUser(1L);
        return ResponseEntity.ok(getPreventionDTOs(preventions));

    }

    private Set<PreventionDTO> getPreventionDTOs(List<Prevention> preventions) {
        return preventions.stream().map(prevention -> {
            return PreventionMapper.toDTO(prevention);
        }).collect(Collectors.toSet());
    }





    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deletePrevention(@PathVariable Long id) {
        preventionService.deletePrevention(id);
        return ResponseEntity.noContent().build();
    }






}
