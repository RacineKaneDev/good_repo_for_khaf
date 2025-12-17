package com.racinekanedev.prevention.service.controller;


import com.racinekanedev.prevention.service.domain.PreventionStatus;
import com.racinekanedev.prevention.service.mapper.PreventionMapper;
import com.racinekanedev.prevention.service.modal.Prevention;
import com.racinekanedev.prevention.service.modal.PreventionReport;
import com.racinekanedev.prevention.service.payload.dto.PreventionDTO;
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
@RequestMapping("/api/preventions/companyAdmin")
public class PreventionCompanyController {

    private final PreventionService preventionService;
    private final JavaMailSender mailSender;
    private final PreventionMapper preventionMapper;

    @PutMapping("/{preventionId}/status")
    public ResponseEntity<PreventionDTO> updatePrevention(@PathVariable Long preventionId, PreventionStatus status) throws Exception {

        Prevention prevention = preventionService.updatePrevention(preventionId, status);
        return ResponseEntity.ok(PreventionMapper.toDTO(prevention));
    }


    @GetMapping("/{preventionId}")
    public ResponseEntity<PreventionDTO> getPreventionById(@PathVariable Long preventionId) throws Exception {
        Prevention prevention = preventionService.getPreventionById(preventionId);

        return ResponseEntity.ok(PreventionMapper.toDTO(prevention));
    }


    @GetMapping
    public ResponseEntity<List<PreventionDTO>> getAllPreventions() {

        List<Prevention> preventions = preventionService.getAllPreventions();

        List<PreventionDTO> preventionDTOS = preventions.stream().map((prevention) ->
        {
            PreventionDTO preventionDTO = PreventionMapper.toDTO(prevention);
            return preventionDTO;

        }).toList();

        return ResponseEntity.ok(preventionDTOS);
    }

    @GetMapping("/zone/search")
    public ResponseEntity<List<PreventionDTO>> getPreventionsByZone(@RequestParam("zonePrevention")
                                                                    String zonePrevention)
            throws Exception {


        List<Prevention> preventions = preventionService.getPreventionsByZone(zonePrevention);

        List<PreventionDTO> preventionDTOS = preventions.stream().map((prevention)->
        {
            PreventionDTO preventionDTO = PreventionMapper.toDTO(prevention);
            return preventionDTO;
        }).toList();

        return ResponseEntity.ok(preventionDTOS);
    }

    @GetMapping("/status")
    public ResponseEntity<Set<PreventionDTO>> getPreventionsByStatus(@PathVariable PreventionStatus status) {

        List<Prevention> preventions = preventionService.getPreventionsByStatus(status);
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


    @GetMapping("/report")
    public ResponseEntity<PreventionReport> getPreventionReport(){

        PreventionReport report = preventionService.getPreventionReport();
        return ResponseEntity.ok(report);

    }


    @GetMapping("/{id}/pdf")
    public ResponseEntity<byte[]> getPreventionPDF(@PathVariable Long id) {
        byte[] pdf = preventionService.generatePreventionPDF(id);
        return ResponseEntity.ok()
                .header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=prevention_report.pdf")
                .contentType(MediaType.APPLICATION_PDF)
                .body(pdf);
    }

    @PostMapping("/{id}/send-mail")
    public ResponseEntity<String> sendPreventionMail(@PathVariable Long id) {
        String policeMaritimeEmail = "police123@gmail.com";//on mettra le vrai mail de la police
        preventionService.sendPreventionReportByEmail(id, policeMaritimeEmail);
        return ResponseEntity.ok("Rapport envoyé à la police maritime : " + policeMaritimeEmail);
    }
}
