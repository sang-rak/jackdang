import { memo, useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import axios from "../../api/axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { Col, Image, Row } from "react-bootstrap";
const Account = () => {
  const Account_URL = "";
  const [pagestatus, setPagestatus] = useState(""); // 화면 상태 저장
  const [likearr, setLikearr] = useState([
    "하늘",
    "여행",
    "바다",
    "사진",
    "풍경",
  ]);
  const [address, setAddress] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [introduce, setIntroduce] = useState("안녕하세요");
  const [nickname, setNickname] = useState("");

  // 관심사 리스트
  // const [users, setUsers] = useState([]);

  // 리랜더링되면 실행 되는 코드
  useEffect(() => {
    fetchUserData();
  }, []);
  // 회원 확인 코드
  const fetchUserData = async () => {
    // 추후 개발
    try {
      // 세션 회원 확인
      const id = "1";
      // const request = await axios.get(requests.fetchUsers);
      const request = await axios.get(`/api/v1/member/${id}`);
      // setUsers(request.data.results);
      setAddress(request.data.address);
      setAge(request.data.age);
      setGender(request.data.gender);
      setIntroduce(request.data.introduce);
      setNickname(request.data.nickname);
    } catch (error) {
      // 응답 실패 (로그아웃상태)
      alert("로그인 후 사용가능합니다.");
    }
  };
  const AccountPagePlus = async () => {
    // 추가 정보 더보기
    setPagestatus("추가정보화면");
  };

  // 추가 정보 바뀌는 화면 설정
  const Modalpage = () => {
    switch (pagestatus) {
      case "추가정보화면":
        return (
          <>
            <Row>
              <Col xs={3} sm={3} className="text-primary">
                직업
              </Col>
              <Col xs={9} sm={9}>
                취준생
              </Col>
            </Row>
            <Row>
              <Col xs={3} sm={3} className="text-primary">
                종교
              </Col>
              <Col xs={9} sm={9}>
                불교
              </Col>
            </Row>
            <Row>
              <Col xs={3} sm={3} className="text-primary">
                MBTI
              </Col>
              <Col xs={9} sm={9}>
                INTP
              </Col>
            </Row>
            <Row>
              <Col xs={3} sm={3} className="text-primary">
                연애
              </Col>
              <Col xs={9} sm={9}>
                솔로
              </Col>
            </Row>
          </>
        );

      default:
        return (
          <Row onClick={AccountPagePlus}>
            <div className="text-center">추가 정보 더보기</div>
            <div>
              <FontAwesomeIcon
                className="mx-auto d-block"
                icon={faChevronDown}
              />
            </div>
          </Row>
        );
    }
  };

  return (
    <Container className="d-grid gap-2">
      <Row className="mx-5 my-3">
        <Image
          roundedCircle
          src="https://thx.sfo2.cdn.digitaloceanspaces.com/wr/coverimages/m_11/%EC%9E%91%EB%8B%B9%ED%95%98%EB%8B%A4_11.jpg"
          alt=""
          className="rounded img-responsive center-block"
          size="sm"
        ></Image>
      </Row>
      <Row className="text-center">
        <div className="fs-1 fw-bold">{nickname}</div>
        <div>
          {age}세 {gender}
        </div>
        <div className="text-muted">{address}</div>
      </Row>
      <hr></hr>
      <Row>
        <Col xs={3} sm={3} className="text-primary">
          소개
        </Col>
        <Col xs={9} sm={9}>
          {introduce}
        </Col>
      </Row>
      <Row>
        <Col xs={3} sm={3} className="text-primary">
          관심사
        </Col>
        <Col xs={9} sm={9}>
          <Row>
            <Col>
              {likearr.map((like, index) => (
                <span className="mx-1 badge bg-secondary text-wrap" key={index}>
                  {like}
                </span>
              ))}
            </Col>
          </Row>
        </Col>
      </Row>
      <hr></hr>
      {Modalpage()}
      <hr></hr>
    </Container>
  );
};

export default memo(Account);
