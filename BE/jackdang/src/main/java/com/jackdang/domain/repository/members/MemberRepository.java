package com.jackdang.domain.repository.members;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.jackdang.domain.entity.members.Member;

public interface MemberRepository extends JpaRepository<Member, Long> {
	
	List<Member> findByPhone(String phone);
	List<Member> findByPassword(String password);
	List<Member> findByNickname(String nickname);
}
