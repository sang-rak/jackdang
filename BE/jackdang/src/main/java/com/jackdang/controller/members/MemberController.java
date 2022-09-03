package com.jackdang.controller.members;

import java.util.List;
import java.util.stream.Collectors;

import javax.validation.Valid;

import org.springframework.web.bind.annotation.*;

import com.jackdang.controller.members.dto.MemberDto.CreateMemberRequest;
import com.jackdang.controller.members.dto.MemberDto.CreateMemberResponse;
import com.jackdang.controller.members.dto.MemberDto.MemberDtojoin;
import com.jackdang.controller.members.dto.MemberDto.Result;
import com.jackdang.controller.members.dto.MemberDto.UpdateMemberRequest;
import com.jackdang.controller.members.dto.MemberDto.UpdateMemberResponse;
import com.jackdang.domain.entity.members.Member;
import com.jackdang.service.members.MemberService;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
public class MemberController {
    private final MemberService memberService;


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
     * param: phone
     */
    @PostMapping("/api/v1/members")
    public CreateMemberResponse saveMemberV1(@RequestBody @Valid CreateMemberRequest request) {
    	
    	Member member = new Member();
    	member.setPhone(request.getPhone());
    	 
    	Long id = memberService.join(member);
    	
    	return new CreateMemberResponse(id);
    }
    
    /*
     * 회원 삭제
     * 회원가입한 고객이 인증번호를 제시못할경우 상제
     */
    
    /*
     * 회원 내용 수정 및 비밀번호 수정
     */
    @PutMapping("/api/v1/members/{id}")
    public UpdateMemberResponse updateMemberV1(
    		@PathVariable("id") Long id,
    		@RequestBody @Valid UpdateMemberRequest request) {
  
    	memberService.update(id, request.getPassword());
    	Member findMember = memberService.findOne(id);
    	return new UpdateMemberResponse(findMember.getId(), findMember.getPassword());
    	
    }
    
}
