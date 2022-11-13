import ReactModal from "react-modal";
import Button from "react-bootstrap/Button";
import React, { useState } from "react";
import { Col, Form, Row } from "react-bootstrap";
import axios from "../../../api/axios";

const MyModal = ({ isOpen, onSubmit, likearr }) => {
  // 회원 관심사 추가
  const addInterestData = async (interest_nm) => {
    try {
      // 이미 관심사 추가했을 경우 관심사 해제처리
      if (likearr.includes(interest_nm)) {
        console.log("해제처리 개발필요", interest_nm);
        onToggle(interest_nm);
      } else {
        // 없을경우 추가
        const id = "1";
        const response = await axios.post("/api/v1/interest", {
          //보내고자 하는 데이터
          interest_nm: interest_nm,
          memberId: id,
        });
        console.log(response);
        onToggle(interest_nm);
        likearr.push(interest_nm); // 관심사 리스트 추가
      }
    } catch (error) {
      // 응답 실패
      console.log(error);
      alert("응답 실패");
    }
  };
  // 관심사 상태값 토글
  const onToggle = async (interest_nm) => {
    setLikelist(
      likelist.map((like) =>
        like.interest_nm === interest_nm
          ? { ...like, status: !like.status }
          : like
      )
    );
  };

  //관심사 목록
  const [likelist, setLikelist] = useState([
    {
      id: 1,
      icon: "🙋‍♀",
      interest_nm: "동네친구",
      description: "심심해? 지금 바로 만날까?",
      status: false,
    },
    {
      id: 2,
      icon: "☕",
      interest_nm: "카페투어",
      description: "커피 맛집부터 인증샷 카페까지!",
      status: false,
    },
    {
      id: 3,
      icon: "👕",
      interest_nm: "데일리룩",
      description: "옷 사느라 텅장 되는 사람?",
      status: false,
    },
    {
      id: 4,
      icon: "🍴",
      interest_nm: "맛집투어",
      description: "맛있는 음식 먹을 때 찐행복!",
      status: false,
    },
    {
      id: 5,
      icon: "👟",
      interest_nm: "운동 챌린지",
      description: "땀 흘리며 건강 레벨업",
      status: false,
    },
    {
      id: 6,
      icon: "🥗",
      interest_nm: "다이어트",
      description: "오늘도 배고픔을 참습니다",
      status: false,
    },
    {
      id: 7,
      icon: "📺︎",
      interest_nm: "넷플릭스",
      description: "자기 전 넷플릭스가 취미",
      status: false,
    },
    {
      id: 8,
      icon: "🐕︎",
      interest_nm: "강아지",
      description: "멍멍~ 내강아지가 제일 귀여워!",
      status: false,
    },
  ]);

  // 확인 후 창닫기
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
        {likelist.map((like) => (
          <Row key={like.id} className="my-4">
            <Col>
              <Row>{like.icon}</Row>
            </Col>
            <Col>
              <Row>{like.interest_nm}</Row>
              <Row>{like.description}</Row>
            </Col>
            <Col>
              {like.status ? (
                <Button
                  variant="outline-primary"
                  onClick={() => {
                    addInterestData(like.interest_nm);
                  }}
                >
                  취소하기
                </Button>
              ) : (
                <Button
                  variant="primary"
                  onClick={() => {
                    addInterestData(like.interest_nm);
                  }}
                >
                  해제하기
                </Button>
              )}
            </Col>
          </Row>
        ))}
      </Form>
    );
  };
  return <ReactModal isOpen={isOpen}>{Modalpage()}</ReactModal>;
};

export default MyModal;
