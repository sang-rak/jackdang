package com.jackdang.controller.members.dto;

import javax.persistence.Column;

import com.jackdang.domain.entity.members.Member;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
public class MemberV2Dto {
	
	@Column(name = "member_id")
	private Long id;
	@Column(nullable = false, unique = true)
	private String phone;
	private String password;
	// @Column(nullable = false, unique = true)
	private String nickname;
	// @Column(nullable = false)
	private int age;
	private String gender;
	private String profile_filed;
	private String introduce;
	private String address;
	private boolean marketing_agree;
	
	@Builder
	public MemberV2Dto(
			Long id, 
			String phone, 
			String password, 
			String nickname, 
			int age, 
			String gender,
			String profile_filed,
			String introduce,
			String address,
			boolean marketing_agree
			) {
		this.id = id;
		this.phone = phone;
		this.password = password;
		this.nickname = nickname;
		this.age = age;
		this.gender = gender;
		this.profile_filed = profile_filed;
		this.introduce = introduce;
		this.address = address;
		this.marketing_agree = marketing_agree;
	}
	
	public Member toEntity() {
		return Member.builder()
				.id(id)
				.phone(phone)
				.password(password)
				.password(password)
				.nickname(nickname)
				.age(age)
				.gender(gender)
				.profile_filed(profile_filed)
				.introduce(introduce)
				.address(address)
				.marketing_agree(marketing_agree)
				.build();
	}
}
