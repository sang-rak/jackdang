package com.jackdang.service.members;

import java.util.List;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

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
	public Long join(Member member) {
		
		validateDuplicateMember(member); // 중복 회원 검증
		memberRepository.save(member);
		return member.getId();
	}

	private void validateDuplicateMember(Member member) {
		List<Member> findMembers = memberRepository.findByPhone(member.getPhone());
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
	
	@Transactional
	public void update(Long id, String password) {
		Member member = memberRepository.findById(id).get();
		member.setPassword(password);
		
	}

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
