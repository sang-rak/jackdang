package com.jackdang.controller.interests;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.jackdang.common.auth.JwtAuthProvider;
import com.jackdang.controller.interests.dto.InterestDto;
import com.jackdang.controller.members.dto.MemberDto;
import com.jackdang.controller.members.dto.MemberDto.MemberDtojoin;
import com.jackdang.controller.members.dto.MemberDto.Result;
import com.jackdang.domain.entity.members.Member;
import com.jackdang.service.interests.InterestService;
import com.jackdang.service.members.MemberService;

import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
public class InterestController {
	private final InterestService interestService;
	
    /*
     * 관심사등록
     * param: 
     * 
     */
    @PostMapping("/api/v1/interests")
    public Long saveInterestV1(@RequestBody InterestDto interestDto) {
    	return interestService.save(interestDto);
    }
    
    /**
     * 회원 내용 수정 및 비밀번호 수정
     */
    @PutMapping("/api/v1/interest/{interestid}") 
    public Long update(@PathVariable Long interestid, @RequestBody InterestDto interestDto){
    	return interestService.update(interestid, interestDto);
    }

    /**
     * 회원 관심사 전체 조회
     */
    @GetMapping("/api/v1/interest/{memberid}")
    public InterestDto findById(@PathVariable Long memberid) {
    	return interestService.findById(memberid);
    }
    
    
    /**
     * 전체 관심사 조회
     */
    
//    @GetMapping("/api/v1/interests")
//    public Result interestV1() {
//    	List<Interest> findMembers = interestService.findMembers();
//    	List<InterestDtojoin> collect = findMembers.stream()
//    			.map(m -> new MemberDtojoin(m.getPhone()))
//    			.collect(Collectors.toList());
//    	
//    	return new Result(collect.size(), collect);
//    }
}
