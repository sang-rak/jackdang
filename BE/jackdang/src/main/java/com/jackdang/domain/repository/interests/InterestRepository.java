package com.jackdang.domain.repository.interests;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.jackdang.domain.entity.interests.Interest;


public interface InterestRepository extends JpaRepository<Interest, Long> {
	List<Interest> findByMember_id(Long memberId);
}
