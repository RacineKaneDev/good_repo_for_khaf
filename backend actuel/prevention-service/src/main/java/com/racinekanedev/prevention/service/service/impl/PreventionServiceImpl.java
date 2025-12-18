package com.racinekanedev.prevention.service.service.impl;

import com.itextpdf.io.source.ByteArrayOutputStream;
import com.itextpdf.kernel.pdf.PdfDocument;
import com.itextpdf.kernel.pdf.PdfWriter;
import com.itextpdf.layout.Document;
import com.itextpdf.layout.element.Paragraph;
import com.racinekanedev.prevention.service.domain.PreventionStatus;
import com.racinekanedev.prevention.service.mapper.PreventionMapper;
import com.racinekanedev.prevention.service.modal.Prevention;
import com.racinekanedev.prevention.service.modal.PreventionReport;
import com.racinekanedev.prevention.service.payload.dto.CreatePreventionRequest;
import com.racinekanedev.prevention.service.payload.dto.PreventionDTO;
import com.racinekanedev.prevention.service.payload.dto.UserDTO;
import com.racinekanedev.prevention.service.repository.PreventionRepository;
import com.racinekanedev.prevention.service.service.PreventionService;
import jakarta.mail.internet.MimeMessage;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.ByteArrayResource;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class PreventionServiceImpl implements PreventionService {


    private final PreventionRepository preventionRepository;
    private final PreventionMapper preventionMapper;

    @Autowired
    private JavaMailSender mailSender;

    @Override
    public Prevention createPrevention(CreatePreventionRequest prevention, UserDTO user) {
        Prevention savedPrevention = new Prevention();
        savedPrevention.setFullName(prevention.getFullName());
        savedPrevention.setEmail(prevention.getEmail());
        savedPrevention.setAddress(prevention.getAddress());
        savedPrevention.setDatePrevention(prevention.getDatePrevention());
        savedPrevention.setZonePrevention(prevention.getZonePrevention());
        savedPrevention.setUserId(user.getId());
        savedPrevention.setAge(prevention.getAge());
       savedPrevention.setTypePrevention(prevention.getTypePrevention());
       savedPrevention.setObservation(prevention.getObservation());


       return preventionRepository.save(savedPrevention);
    }

    @Override
    public Prevention updatePrevention(Long preventionId, PreventionStatus status) throws Exception {

        Prevention prevention = getPreventionById(preventionId);
        prevention.setStatus(status);
        return preventionRepository.save(prevention);
    }

    @Override
    public Prevention getPreventionById(Long id) throws Exception {
        Prevention prevention = preventionRepository.findById(id).orElse(null);
        if (prevention == null) {
            throw  new Exception("prevention not found");
        }
        return prevention;

    }

    @Override
    public List<Prevention> getAllPreventions() {
        return  preventionRepository.findAll();
    }

    @Override
    public List<Prevention> getPreventionsByUser(Long userId) {
        return preventionRepository.findByUserId(userId);
    }

    @Override
    public List<Prevention> getPreventionsByZone(String zone) {
        return preventionRepository.findByZonePrevention(zone);
    }

    @Override
    public List<Prevention> getPreventionsByStatus(PreventionStatus status) {
        return preventionRepository.findByStatus(status);
    }

    @Override
    public void deletePrevention(Long id) {
        preventionRepository.deleteById(id);
    }

    // ✅ Nouvelle méthode pour le dashboard global
    @Override
    public PreventionReport getPreventionReport() {
        List<Prevention> preventions = preventionRepository.findAll();

        long total = preventions.size();
        long stopped = preventions.stream()
                .filter(p -> p.getStatus() == PreventionStatus.STOPPED)
                .count();
        long failed = preventions.stream()
                .filter(p -> p.getStatus() == PreventionStatus.FAILED)
                .count();
        long ongoing = preventions.stream()
                .filter(p -> p.getStatus() == PreventionStatus.ONGOING)
                .count();

        double successRate = total > 0 ? (stopped * 100.0 / total) : 0.0;

        PreventionReport preventionReport = new PreventionReport();
        preventionReport.setTotalPreventions(total);
        preventionReport.setStoppedPreventions(stopped);
        preventionReport.setFailedPreventions(failed);
        preventionReport.setOngoingPreventions(ongoing);
        preventionReport.setSuccessRate(successRate);
        return preventionReport;

    }



    @Override
    public byte[] generatePreventionPDF(Long preventionId) {
        Prevention prevention = preventionRepository.findById(preventionId)
                .orElseThrow(() -> new RuntimeException("Prevention not found"));

        try (ByteArrayOutputStream baos = new ByteArrayOutputStream()) {
            PdfWriter writer = new PdfWriter(baos);
            PdfDocument pdf = new PdfDocument(writer);
            Document document = new Document(pdf);

            document.add(new Paragraph("🚨 Rapport de Prévention fait par:"));
            document.add(new Paragraph("Nom: " + prevention.getFullName()));
            document.add(new Paragraph("Email: " + prevention.getEmail()));
            document.add(new Paragraph("Adresse: " + prevention.getAddress()));
            document.add(new Paragraph("Âge: " + prevention.getAge()));
            document.add(new Paragraph("Zone: " + prevention.getZonePrevention()));
            document.add(new Paragraph("Date: " + prevention.getDatePrevention()));
            document.add(new Paragraph("Statut: " + prevention.getStatus()));
            document.add(new Paragraph("Type: " + prevention.getTypePrevention()));
            document.add(new Paragraph("Observation: " + prevention.getObservation()));

            document.close();
            return baos.toByteArray();
        } catch (Exception e) {
            throw new RuntimeException("Erreur lors de la génération du PDF", e);
        }
    }

    @Override
    public void sendPreventionReportByEmail(Long preventionId, String recipientEmail) {
        byte[] pdfData = generatePreventionPDF(preventionId);

        try {

            MimeMessage message = mailSender.createMimeMessage();
            MimeMessageHelper helper = new MimeMessageHelper(message, true);
            helper.setTo(recipientEmail);
            helper.setSubject("Rapport de Prévention");
            helper.setText("Veuillez trouver ci-joint ce rapport de prévention.");
            helper.addAttachment("prevention_report.pdf", new ByteArrayResource(pdfData));

            mailSender.send(message);
        } catch (Exception e) {
            throw new RuntimeException("Erreur lors de l'envoi du mail", e);
        }
    }
}
