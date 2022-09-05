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

const Signup = () => {

  // const [users, setUsers] = useState([]);

  // 리랜더링되면 실행 되는 코드 
  useEffect(() => {
    // fetchUserData();
  }, []);
  // 회원 확인 코드 
  const fetchUserData = async () => {
    // const request = await axios.get(requests.fetchUsers);
    const request = await axios.get("/api/v1/members");
    console.log("request", request);
    // setUsers(request.data.results);
  };

  // 회원 등록 코드 
  const [phone, setPhone] = useState("");
  const [disabled, setDisabled] = useState(false);
  
  const handleChange = ({ target: { value } }) => setPhone(value)
  
  const handelSubmit = async (event) => {
    setDisabled(true);
    event.preventDefault();
    await new Promise((r) => setTimeout(r, 1000));

    if (phone.length !== 11) {
      alert("010******** 휴대폰번호를 사용하여야 합니다.");
    } else {
      // alert(`아이디: ${phone}`);
      try{
        const response = await axios.post("/api/v1/members",{
          //보내고자 하는 데이터
          phone: phone
        });
        console.log("response", response);
      } catch (error) {
        // 응답 실패
        alert("동일한 회원이 있습니다 ");
        console.log("error", error);
      }
    }
    setDisabled(false);
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
        <div>
          <Form onSubmit={handelSubmit}>
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
      </Stack>
    </Container>
  );
};

export default memo(Signup);
