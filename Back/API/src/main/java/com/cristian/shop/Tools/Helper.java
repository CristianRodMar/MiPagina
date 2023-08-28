package com.cristian.shop.Tools;

import java.util.HashMap;
import java.util.Map;

import org.springframework.data.domain.Page;

public class Helper {
    
    public static <T> Map<String, Object> convertToResponse(final Page<T> page) {
        Map<String, Object> response = new HashMap<>();
        response.put("dataList", page.getContent());
        response.put("currentPage", page.getNumber());
        response.put("totalItems", page.getTotalElements());
        response.put("totalPages", page.getTotalPages());
        return response;
    }

}
