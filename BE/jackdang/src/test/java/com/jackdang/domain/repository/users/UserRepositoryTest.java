package com.jackdang.domain.repository.users;

import static org.assertj.core.api.Assertions.assertThat;
import static org.junit.jupiter.api.Assertions.*;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.annotation.Rollback;
import org.springframework.transaction.annotation.Transactional;

import com.jackdang.domain.entity.users.User;

@SpringBootTest
@Transactional
@Rollback(false)
class UserRepositoryTest {

	@Autowired UserRepository userRepository;
	@PersistenceContext
	EntityManager em;

	@Test
	public void testuser() {
		User user = new User("User1");
		User savedUser = userRepository.save(user);
		User findUser = userRepository.findById(savedUser.getId()).get();
		
		assertThat(findUser.getId()).isEqualTo(user.getId());
		assertThat(findUser.getPhone()).isEqualTo(user.getPhone());
		assertThat(findUser).isEqualTo(user);
	}
	
}
