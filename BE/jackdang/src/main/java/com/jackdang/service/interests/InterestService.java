package com.jackdang.service.interests;

import java.util.List;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.jackdang.controller.interests.dto.InterestDto;
import com.jackdang.controller.members.dto.MemberDto;
import com.jackdang.domain.entity.interests.Interest;
import com.jackdang.domain.entity.members.Member;
import com.jackdang.domain.repository.interests.InterestRepository;
import com.jackdang.domain.repository.members.MemberRepository;

import lombok.RequiredArgsConstructor;

@Service
@Transactional(readOnly = true)
@RequiredArgsConstructor
public class InterestService {
	
	private final InterestRepository interestRepository;
	private final MemberRepository memberRepository;
	
	/*
	 *  관심사 등록
	 */
	@Transactional
	public Long save(InterestDto interestDto) {
		interestRepository.save(interestDto.toEntity());
		return interestDto.getId();
	}

	// 회원 단건 수정
	@Transactional
	public Long update(Long interestId, InterestDto interestDto) {
		Interest interest = interestRepository.findById(interestId).orElseThrow(() -> new IllegalArgumentException("해당 관심사가 없습니다"));
		interest.update(interestDto.getInterest_nm(), interestDto.getMember());
		return interestId;
	};
	
	// 관심사 전체 조회
	public List<Interest> findInterests() {
		return interestRepository.findAll();
	}
	
	// 관심사 회원 다건 조회
	public InterestDto findById(Long memberId) {
		List<Interest> interest= interestRepository.findByMember_id(memberId);
		return new InterestDto(interest.get(0));
	}
	

	
}
