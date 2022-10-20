package com.jackdang.service.interests;

import java.util.List;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.jackdang.controller.interests.dto.InterestDto;
import com.jackdang.controller.members.dto.MemberDto;
import com.jackdang.domain.entity.interests.Interest;
import com.jackdang.domain.entity.members.Member;
import com.jackdang.domain.repository.interests.InterestRepository;

import lombok.RequiredArgsConstructor;

@Service
@Transactional(readOnly = true)
@RequiredArgsConstructor
public class InterestService {
	
	private final InterestRepository interestRepository;
	
	// 관심사 전체 조회
	public List<Interest> findInterests() {
		return interestRepository.findAll();
	}
	
	// 관심사 단건 조회
	public InterestDto findById(Long memberId) {
		List<Interest> interest= interestRepository.findByMember_id(memberId);
		return new InterestDto(interest);
	}
	

	
}
