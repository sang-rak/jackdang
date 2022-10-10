package com.jackdang.service.members;

import java.util.List;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.jackdang.controller.members.dto.MemberV2Dto;
import com.jackdang.domain.entity.members.Member;
import com.jackdang.domain.repository.members.MemberRepository;

import lombok.RequiredArgsConstructor;

@Service
@Transactional(readOnly = true)
@RequiredArgsConstructor
public class MemberService {
	

	private final MemberRepository memberRepository;
	
	/*
	 *  회원 가입
	 */
	@Transactional
	public Long save(MemberV2Dto memberV2Dto) {
		validateDuplicateMember(memberV2Dto); // 중복 회원 검증
		memberRepository.save(memberV2Dto.toEntity());
		return memberV2Dto.getId();
	}
//	@Transactional
//	public Long join(Member member) {
//		
//		validateDuplicateMember(member); // 중복 회원 검증
//		memberRepository.save(member);
//		return member.getId();
//	}

	private void validateDuplicateMember(MemberV2Dto memberV2Dto) {
		List<Member> findMembers = memberRepository.findByPhone(memberV2Dto.getPhone());
		
		if (!findMembers.isEmpty()) {
			throw new IllegalStateException("이미 존재하는 회원입니다.");
		}
	}
	
	// 회원 전체 조회
	public List<Member> findMembers() {
		return memberRepository.findAll();
	}
	
	public Member findOne(Long memberId) {
		return memberRepository.findById(memberId).get();
	}
	
//	@Transactional
//	public void update(Long id, String password) {
//		Member member = memberRepository.findById(id).get();
//		member.setPassword(password);
//		
//	}

	public boolean login(String phone, String password){
		List<Member> findMembers = memberRepository.findByPhone(phone);
		if (findMembers.isEmpty()){
			return false;
		}
		if ( !password.equals(findMembers.get(0).getPassword()) ){
			return false;
		}
		return true;
	}
}
