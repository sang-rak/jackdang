package com.jackdang.domain.entity.members;

import javax.persistence.Column;
import javax.persistence.Embedded;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.jackdang.domain.entity.common.BaseEntity;

import lombok.Getter;
import lombok.Setter;

@Entity
@Getter @Setter
public class Member extends BaseEntity {
	
	@Id @GeneratedValue
	@Column(name = "member_id")
	private Long id;
	
	private String phone;
	private String password;
	private String nickname;
	private int age;
	private String profile_filed;
	private String introduce;
	private String address;
	
}
