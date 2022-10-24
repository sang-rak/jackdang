package com.jackdang.domain.entity.interests;

import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

import com.jackdang.domain.entity.common.BaseTimeEntity;
import com.jackdang.domain.entity.members.Member;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Entity
@Getter
@NoArgsConstructor
public class Interest extends BaseTimeEntity {

	@Id @GeneratedValue
	@Column(name = "interest_id")
	private Long id;
	
	private String interest_nm;
	
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "member_id", insertable = false, updatable = false)
	private Member member;
	
	@Column(name = "member_id")
	private Long memberId;
	
	@Builder
	public Interest(
			Long id, 
			String interest_nm,
			Long memberId
			) {
		this.id = id;
		this.interest_nm = interest_nm;
		this.memberId = memberId;
	}
	
	public Interest(Member member) {
		this.member = member;
	}

	public void update(String interest_nm, Long memberId) {
		this.interest_nm = interest_nm;
		this.memberId = memberId;
		
	}
}
