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
	@JoinColumn(name = "member_id", insertable = false, updatable = false)
	private Member member;
	
	@Column(name = "member_id")
	private Long memberId;
	
	@Builder
	public InterestDto(
			Long id,
			String interest_nm,
			Long memberId
			) {
		this.id = id;
		this.interest_nm = interest_nm;
		this.memberId = memberId;
	};
	
	public InterestDto(Long memberId) {
		this.memberId = memberId;
	}
	/*
	 * 관심사 등록
	 */
	public Interest toEntity() {
		return Interest.builder()
				.id(id)
				.interest_nm(interest_nm)
				.memberId(memberId)
				.build();
	};
	/*
	 * 관심사 조회
	 */
	public InterestDto(Interest interest) {
		this.id = interest.getId();
		this.interest_nm = interest.getInterest_nm();
		this.memberId = interest.getMemberId();

	};
}
