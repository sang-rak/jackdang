import ReactModal from "react-modal";
import Button from "react-bootstrap/Button";
import React, { useState } from "react";
import { Col, Form, Row } from "react-bootstrap";

const MyModal = ({ isOpen, onSubmit }) => {
  //회원의 등록한 관심사
  const [likearr, setLikearr] = useState([]);
  //관심사 목록
  const [likelist, setLikelist] = useState([
    {
      icon: "🙋‍♀",
      interest_nm: "동네친구",
      description: "심심해? 지금 바로 만날까?",
    },
    {
      icon: "☕",
      interest_nm: "카페투어",
      description: "커피 맛집부터 인증샷 카페까지!",
    },
    {
      icon: "👕",
      interest_nm: "데일리룩",
      description: "옷 사느라 텅장 되는 사람?",
    },
    {
      icon: "🍴",
      interest_nm: "맛집투어",
      description: "맛있는 음식 먹을 때 찐행복!",
    },
    {
      icon: "👟",
      interest_nm: "운동 챌린지",
      description: "땀 흘리며 건강 레벨업",
    },
    {
      icon: "🥗",
      interest_nm: "다이어트",
      description: "오늘도 배고픔을 참습니다",
    },
    {
      icon: "📺︎",
      interest_nm: "넷플릭스",
      description: "자기 전 넷플릭스가 취미",
    },
    {
      icon: "🐕︎",
      interest_nm: "강아지",
      description: "멍멍~ 내강아지가 제일 귀여워!",
    },
  ]);

  //동의
  const handleClickSubmit = () => {
    onSubmit();
  };

  const Modalpage = () => {
    return (
      <Form>
        <Row>
          <Col>
            <Form.Label column="lg">관심사 선택하기</Form.Label>
          </Col>
          <Col>
            <Button variant="secondary" onClick={handleClickSubmit}>
              확인
            </Button>
          </Col>
        </Row>
        <hr></hr>
        {likelist.map((like, index) => (
          <Row className="my-4">
            <Col>
              <Row key={index}>{like.icon}</Row>
            </Col>
            <Col>
              <Row key={index}>{like.interest_nm}</Row>
              <Row key={index}>{like.description}</Row>
            </Col>
            <Col>
              <Button variant="outline-primary" onClick={handleClickSubmit}>
                선택하기
              </Button>
            </Col>
          </Row>
        ))}
      </Form>
    );
  };
  return <ReactModal isOpen={isOpen}>{Modalpage()}</ReactModal>;
};

export default MyModal;
