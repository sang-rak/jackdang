import { StyledTitle } from './styles';
import { memo } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Stack from 'react-bootstrap/Stack';
// import { instance } from "../../api/axios";
// import requests from "../.././api/requests";
// import React, { useState, useEffect } from "react";

const Signup = () => {

//   const [users, setUsers] = useState([]);

//   useEffect(() => {
//     fetchUserData();
//   }, []);

//   const fetchUserData = async () => {
//     const request = await axios.get(requests.fetchUsers);
//     console.log("request", request);
//     setUsers(request.data.results);
//   };

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
          <Form>
            <Form.Group className="mb-3" controlId="formBasicCall">
              <Form.Label>핸드폰 번호를 입력해주세요 </Form.Label>
              <Form.Control type="call" placeholder="핸드폰 번호를 입력해주세요" />
            </Form.Group>

            <Row >
              <Button variant="secondary" type="submit">
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
