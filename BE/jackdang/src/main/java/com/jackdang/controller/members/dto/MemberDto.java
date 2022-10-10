package com.jackdang.controller.members.dto;

import com.jackdang.controller.members.MemberController;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
@Builder
public class MemberDto {
	
    @Data
    @AllArgsConstructor
    public static class Result<T> {
    	private int count;
    	private T data;
    }
    
    @Data
    @AllArgsConstructor
    public static class MemberDtojoin {
    	private String phone;
    }
    
    @Data
    public static class UpdateMemberRequest {
    	private String password;
    }
    
    @Data
    @AllArgsConstructor
    public static class UpdateMemberResponse {
    	private Long id;
    	private String password;
    }
    
    
    @Data
    public static class CreateMemberRequest {
    	private String phone;
    	private String password;
    	private String nickname;
    	private String gender;    	
    	private int age;
    	private boolean marketing_agree;
    }
    
    @Data
    public static class CreateMemberResponse{
        private Long id;

        public CreateMemberResponse(Long id) {
            this.id = id;
        }
    }
}
