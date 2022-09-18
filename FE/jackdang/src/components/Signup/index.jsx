import { StyledTitle } from './styles';
import { memo } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Stack from 'react-bootstrap/Stack';
import axios from "axios"
// import { instance } from "../../api/axios";
// import requests from "../.././api/requests";
import React, { useEffect, useState } from "react";
import MyModal from './Modal';
const Signup = () => {

  // const [users, setUsers] = useState([]);

  // 리랜더링되면 실행 되는 코드 
  useEffect(() => {
    // fetchUserData();
  }, []);
  // // 회원 확인 코드 
  // const fetchUserData = async () => {
  //   // const request = await axios.get(requests.fetchUsers);
  //   const request = await axios.get("/api/v1/members");
  //   console.log("request", request);
  //   // setUsers(request.data.results);
  // };

  // 회원 등록 코드 
  const [phone, setPhone] = useState("");
  const [authcode, setAuthcode] = useState("");  // 인증번호
  const [disabled, setDisabled] = useState(true); // 버튼 활성화 유무
  const [pagestatus, setPagestatus] = useState("번호화면"); // 화면 상태 저장
  const [password, setPassword] = useState(""); // 패스워드
  const [passwordcheck, setPasswordCheck] = useState(""); // 패스워드 확인
  const [nickname, setNickname] = useState(""); // 닉네임
  const [gender, setGender] = useState(""); // 성별
  const [age, setAge] = useState(""); // 나이 
  const [isOpen, setOpen] = useState(false); // 약관동의 모달 핸들링
  // 약관동의 Modal
  const handleClick = () => {
    setOpen(true);
  }

  const handleModalSubmit = () => {
    // 비지니스 로직
    setOpen(false);
  }

  const handleModalCancel = () => {
    setOpen(false);
  }

  // 휴대폰번호 11자 확인
  const handleChange = ({ target: { value } }) => {
    setPhone(value);
    if (value.length === 11) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }

  // 인증번호 6자 확인
  const handleChangeAuth = ({ target: { value } }) => {
    setAuthcode(value);
    if (value.length === 6) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }

  // 비밀번호 6자 확인
  const handleChangePassword = ({ target: { value } }) => {
    setPassword(value);
    if (value.length >= 6) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }
  // 비밀번호확인 6자 확인
  const handleChangePasswordCheck = ({ target: { value } }) => {
    setPasswordCheck(value);
    if (value.length >= 6) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }

  // 닉네임 확인
  const handleChangeNickname = ({ target: { value } }) => {
    setNickname(value);
    if (value.length >= 1) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }
  // 성별 확인
  const handleChangeGender = ({ target: { value } }) => {
    setGender(value);
    if (value.length >= 1) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }
  // 나이 성인 확인
  const handleChangeAge = ({ target: { value } }) => {
    setAge(value);
    if (value.length >= 1) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }


  // 버튼을 눌렀을 때 화면 상태값 바꾸기
  // 휴대폰입력
  const pageChangePhone = async (event) => {
    setDisabled(true);
    event.preventDefault();
    await new Promise((r) => setTimeout(r, 1000));
    // 휴대폰 구조가 맞지 않을 때
    if (phone.length !== 11) {
      alert("010******** 휴대폰번호를 사용하여야 합니다.");
    // 맞을경우 화면전환
    } else {
      setDisabled(false);
      setPagestatus("인증화면");
    }
    setDisabled(false);
  }
  // 인증번호 확인
  const pageChangeAuth = async (event) => {
    setDisabled(true);
    event.preventDefault();
    await new Promise((r) => setTimeout(r, 1000));
    // 인증번호 구조가 맞지 않을 때
    if (authcode.length !== 6) {
      alert("6자리 인증번호를 사용하여야 합니다.");
    // 맞을경우 화면전환
    } else {
      setDisabled(false);
      setPagestatus("비밀번호화면");
    }
    setDisabled(false);
  }
  // 패스워드 설정
  const pageChangePassword = async (event) => {
    setDisabled(true);
    event.preventDefault();
    await new Promise((r) => setTimeout(r, 1000));
    // 비밀번호 구조가 맞지 않을 때
    if (password.length < 6) {
      alert("6자리이상 비밀번호를 사용하여야 합니다.");
    // 맞을경우 화면전환
    } else {
      setDisabled(false);
      setPagestatus("필수정보화면");
    }
    setDisabled(false);
  }
  // 회원정보 입력
  const pageChangeProfile = async (event) => {
    setDisabled(true);
    event.preventDefault();
    await new Promise((r) => setTimeout(r, 1000));
    // 닉네임 구조가 맞지 않을 때
    if (nickname.length < 1) {
      alert("6자리 인증번호를 사용하여야 합니다.");
    // 맞을경우 화면전환
    } else {
      // 회원가입 전송
      try{
        const response = await axios.post("/api/v1/members",{
          //보내고자 하는 데이터
          phone: phone
        });
        
        console.log("response", response);
        setPagestatus("등록완료화면");
      } catch (error) {
        // 응답 실패
        alert("오류가 발생했습니다.");
        console.log("error", error);
      }
      setDisabled(false);
      
    }
    setDisabled(false);
  }

  // 회원가입 바뀌는 화면 설정 
  const Modalpage = () => {
    switch (pagestatus) {
      case "번호화면":
        return(
          <div>
            <Form onSubmit={pageChangePhone}>
              <Form.Group className="mb-3" controlId="formBasicCall">
                <Form.Label>핸드폰 번호를 입력해주세요 </Form.Label>
                <Form.Control             
                  type="phone"
                  name="phone"
                  value={phone}
                  onChange={handleChange} 
                  placeholder="핸드폰 번호를 입력해주세요" />
              </Form.Group>
              <Row >
                <Button variant="secondary" type="submit" disabled={disabled}>
                  다음
                </Button>
              </Row>
            </Form>
          </div>
        );
      case "인증화면":
        return(
          <div>
            <Form onSubmit={pageChangeAuth}>
              <Form.Group className="mb-3" controlId="formBasicCall">
                <Form.Label>회원님의 휴대폰으로 전송된</Form.Label>
                <Form.Label> 인증번호를 입력해주세요.</Form.Label>
                <Form.Control             
                  type="authcode"
                  name="authcode"
                  value={authcode}
                  onChange={handleChangeAuth} 
                  placeholder="인증번호 6자리" />
              </Form.Group>
              <Row >
                <Button variant="secondary" type="submit" disabled={disabled}>
                  다음
                </Button>
              </Row>
            </Form>
          </div>
        );
      case "비밀번호화면":
        return(
          <div>
            <Form onSubmit={pageChangePassword}>
              <Form.Group className="mb-3" controlId="formBasicCall">
                <Form.Label>비밀번호를 입력해주세요.</Form.Label>
                <input type="text" value={phone} class="form-control">
                </input>
                <Form.Control             
                  type="password"
                  name="password"
                  value={password}
                  onChange={handleChangePassword} 
                  placeholder="비밀번호" />
                <Form.Control             
                  type="password"
                  name="passwordcheck"
                  value={passwordcheck}
                  onChange={handleChangePasswordCheck} 
                  placeholder="비밀번호확인" />
              </Form.Group>
              <Row >
                <Button variant="secondary" type="submit" disabled={disabled}>
                  다음
                </Button>
              </Row>
            </Form>
            <div>
              <button onClick={handleClick}>약관동의</button>
              <MyModal 
                isOpen={isOpen}
                onSubmit={handleModalSubmit}
                onCancel={handleModalCancel}
              />
            </div>
          </div>
        );
      case "필수정보화면":
        return(
          <div>
            <Form onSubmit={pageChangeProfile}>
              <Form.Group className="mb-3" controlId="formBasicCall">
                <Form.Label>알맞은 매칭을 위해서 필수적으로 필요해요.</Form.Label>
                <Form.Control             
                    type="nickname"
                    name="nickname"
                    value={nickname}
                    onChange={handleChangeNickname} 
                    placeholder="닉네임" />
                <Form.Control             
                  type="gender"
                  name="gender"
                  value={gender}
                  onChange={handleChangeGender} 
                  placeholder="성별" />
                <Form.Control             
                  type="age"
                  name="age"
                  value={age}
                  onChange={handleChangeAge} 
                  placeholder="나이" />
              </Form.Group>
              <Row >
                <Button variant="secondary" type="submit" disabled={disabled}>
                  다음
                </Button>
              </Row>
            </Form>
          </div>
        );
      case "등록완료화면":
        return(
          <div>
            <h2>가입이</h2> 
            <h2>완료되었습니다.</h2>
          </div>
        );
      default:
        break;
    }
  }

  return (
    
    <Container>
      <Stack gap={3}>
        <div className = "my-3">
          <StyledTitle  className="text-left">작당 모임에</StyledTitle>
          <StyledTitle  className="text-left">가입하기</StyledTitle>

        </div>
        <div>

        </div>
        {Modalpage()}
      </Stack>
      
    </Container>
  );
};

export default memo(Signup);
