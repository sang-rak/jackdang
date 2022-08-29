package com.jackdang.domain.repository.users;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;

import com.jackdang.domain.entity.users.User;

public interface UserRepository extends JpaRepository<User, Long> {
	
	List<User> findByPhone(@Param("phone") String phone);
	
}
