package com.racinekanedev.prevention.service.mapper;


import com.racinekanedev.prevention.service.domain.PreventionStatus;
import com.racinekanedev.prevention.service.modal.Prevention;
import com.racinekanedev.prevention.service.payload.dto.PreventionDTO;
import org.springframework.stereotype.Component;

@Component
public class PreventionMapper {

    public static PreventionDTO toDTO(Prevention entity) {

        PreventionDTO dto = new PreventionDTO();
        dto.setId(entity.getId());
        dto.setFullName(entity.getFullName());
        dto.setEmail(entity.getEmail());
        dto.setAddress(entity.getAddress());
        dto.setAge(entity.getAge());
        dto.setZonePrevention(entity.getZonePrevention());
        dto.setDatePrevention(entity.getDatePrevention());
        dto.setTypePrevention(entity.getTypePrevention());
        dto.setStatus(entity.getStatus());
        dto.setObservation(entity.getObservation());
        return dto;
    }

//    public Prevention toEntity(PreventionDTO dto) {
//        Prevention entity = new Prevention();
//        entity.setId(dto.getId());
//        entity.setFullName(dto.getFullName());
//        entity.setEmail(dto.getEmail());
//        entity.setAddress(dto.getAddress());
//        entity.setAge(dto.getAge());
//        entity.setZonePrevention(dto.getZonePrevention());
//        entity.setDatePrevention(dto.getDatePrevention());
//        entity.setTypePrevention(dto.getTypePrevention());
//        entity.setStatus(PreventionStatus.valueOf(dto.getStatus()));
//        entity.setObservation(dto.getObservation());
//        return entity;
//    }
}
