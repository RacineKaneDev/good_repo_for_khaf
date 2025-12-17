package com.racinekanedev.prevention.service.service;

import com.racinekanedev.prevention.service.domain.PreventionStatus;
import com.racinekanedev.prevention.service.modal.Prevention;
import com.racinekanedev.prevention.service.modal.PreventionReport;
import com.racinekanedev.prevention.service.payload.dto.CreatePreventionRequest;
import com.racinekanedev.prevention.service.payload.dto.UserDTO;

import java.util.List;

public interface PreventionService {

    Prevention createPrevention(CreatePreventionRequest prevention, UserDTO user) throws Exception;

    Prevention updatePrevention(Long preventionId, PreventionStatus status) throws Exception;

    Prevention getPreventionById(Long id) throws Exception;

    List<Prevention> getAllPreventions();

    List<Prevention> getPreventionsByUser(Long userId);

    List<Prevention> getPreventionsByZone(String zone);

    List<Prevention> getPreventionsByStatus(PreventionStatus status);

    void deletePrevention(Long id);

    PreventionReport getPreventionReport();

    byte[] generatePreventionPDF(Long preventionId);

    void sendPreventionReportByEmail(Long preventionId, String recipientEmail);


}
