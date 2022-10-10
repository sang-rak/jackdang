package com.jackdang.domain.entity.members;

import javax.persistence.Column;
import javax.persistence.Embedded;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.jackdang.domain.entity.common.BaseEntity;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter
@NoArgsConstructor
public class Member extends BaseEntity {
	
	@Id @GeneratedValue
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
	public Member(
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
	
}
