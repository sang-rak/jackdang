package com.jackdang.controller.interests.dto;

import java.util.List;

import javax.persistence.Column;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

import com.jackdang.controller.members.dto.MemberDto;
import com.jackdang.domain.entity.interests.Interest;
import com.jackdang.domain.entity.members.Member;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
public class InterestDto {

	@Column(name = "interest_id")
	private Long id;
	
	private String interest_nm;
	
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "member_id")
	private Member member;
	
	@Builder
	public InterestDto(
			Long id,
			String interest_nm,
			Member member
			) {
		this.id = id;
		this.interest_nm = interest_nm;
		this.member = member;
	}
	/*
	 * 관심사 등록
	 */
	public Interest toEntity() {
		return Interest.builder()
				.id(id)
				.interest_nm(interest_nm)
				.member(member)
				.build();
	}
	/*
	 * 관심사 조회
	 */
	public InterestDto(List<Interest> interest) {
		this.id = ((Interest) interest).getId();
		this.interest_nm = ((Interest) interest).getInterest_nm();
		this.member = ((Interest) interest).getMember();

	}
	
}
