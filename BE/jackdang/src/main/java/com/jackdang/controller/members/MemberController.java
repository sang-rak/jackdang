package com.jackdang.controller.members;

import java.time.LocalDateTime;
import java.util.List;
import java.util.stream.Collectors;

import javax.servlet.http.HttpServletResponse;
import javax.validation.Valid;

import com.jackdang.common.auth.JwtAuthProvider;
import com.jackdang.controller.members.dto.AuthDto.AuthLoginRequest;
import com.jackdang.controller.members.dto.AuthDto.AuthLoginResponse;
import com.jackdang.controller.members.dto.MemberDto.*;
import com.jackdang.controller.members.dto.MemberV2Dto;

import org.springframework.web.bind.annotation.*;

import com.jackdang.domain.entity.members.Member;
import com.jackdang.service.members.MemberService;

import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
public class MemberController {
    private final MemberService memberService;
	private final JwtAuthProvider jwtAuthProvider;

    @GetMapping("/api/v1/members")
    public Result memberV1() {
    	List<Member> findMembers = memberService.findMembers();
    	List<MemberDtojoin> collect = findMembers.stream()
    			.map(m -> new MemberDtojoin(m.getPhone()))
    			.collect(Collectors.toList());
    	
    	return new Result(collect.size(), collect);
    	
    	
    }
    
    /*
     * 회원가입
     * param: phone, password, nickname, gender, age, marketing_agree
     * 
     */
    @PostMapping("/api/v1/members")
    public Long saveMemberV1(@RequestBody MemberV2Dto memberV2Dto) {
    	return memberService.save(memberV2Dto);
    }
    
//    @PostMapping("/api/v1/members")
//    public CreateMemberResponse saveMemberV1(@RequestBody @Valid CreateMemberRequest request) {
//    	
//    	Member member = new Member();
//    	member.setPhone(request.getPhone());
//    	member.setPassword(request.getPassword());
//    	member.setNickname(request.getNickname());
//    	member.setGender(request.getGender());
//    	member.setAge(request.getAge());
//    	member.setMarketing_agree(request.isMarketing_agree());
//    	 
//    	Long id = memberService.join(member);
//    	
//    	return new CreateMemberResponse(id);
//    }
    
    /*
     * 회원 삭제
     * 회원가입한 고객이 인증번호를 제시못할경우 상제
     */
    
    /*
     * 회원 내용 수정 및 비밀번호 수정
     */
//    @PutMapping("/api/v1/members/{id}")
//    public UpdateMemberResponse updateMemberV1(
//    		@PathVariable("id") Long id,
//    		@RequestBody @Valid UpdateMemberRequest request) {
//  
//    	memberService.update(id, request.getPassword());
//    	Member findMember = memberService.findOne(id);
//    	return new UpdateMemberResponse(findMember.getId(), findMember.getPassword());
//    	
//    }

	/**
	 * 회원 로그인
	 */
	@PostMapping("/api/excludePath/login")
    public AuthLoginResponse loginMember(@RequestBody AuthLoginRequest request, HttpServletResponse response){

		LocalDateTime now = LocalDateTime.now();
		LocalDateTime exp = now.plusDays(1L); // 만료기간 1일

		String status = "F";
		// 계정정보 존재 및 일치 여부 확인
		if ( memberService.login(request.getPhone(), request.getPassword()) ){
			String token = jwtAuthProvider.createToken(request, now, exp); // 토큰 생성
			response.setHeader("jwt-auth-token", token);
			status = "S";
		}
		return new AuthLoginResponse(request.getPhone(), status);
	}
}
