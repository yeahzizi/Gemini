package com.gemini.userservice.dto.response;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Builder
public class ResponseAlarmDto {

    private String memo;
    private Boolean checked;
    private Integer category;
}