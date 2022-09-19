import ReactModal from "react-modal";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck as faCircleCheckSolid } from '@fortawesome/free-solid-svg-icons'
import { faCircleCheck as faCircleCheckRegular } from '@fortawesome/free-regular-svg-icons'
import Button from 'react-bootstrap/Button';
import React, { useEffect, useState } from "react";

const MyModal = ({ isOpen, onSubmit, onCancel }) => {
  //동의
  const handleClickSubmit = () => {
    onSubmit();
  };

  const [disabled, setDisabled] = useState(true); // 다음 버튼 활성화 유무
  const [agree, setAgree] = useState(false); // 전체동의 버튼 활성화 유무
  const [serviceAgree, setServiceAgree] = useState(false); // 서비스 버튼 활성화 유무
  const [privacyAgree, setPrivacyAgree] = useState(false); // 개인정보 버튼 활성화 유무
  const [marketingAgree, setMarketingAgree] = useState(false); // 마케팅동의 버튼 활성화 유무
  
  // 취소
  // const handleClickCancel = () => {
  //   onCancel();
  // };

  // 전체 동의 클릭 
  const handleAllChange = () => {
    // 상태변화
    if (agree === true) {
      setAgree(false);
      setServiceAgree(false);
      setPrivacyAgree(false);
      setMarketingAgree(false);
      setDisabled(true);
    } else {
      setAgree(true);
      setServiceAgree(true);
      setPrivacyAgree(true);
      setMarketingAgree(true);
      setDisabled(false);
    }

  }

  // 서비스 이용약관 동의 클릭 
  const handleChange1 = () => {

    // 상태변화
    if (serviceAgree === true) {
      setServiceAgree(false);
    } else {
      setServiceAgree(true);
    }
    // 필수동의(서비스 및 개인정보) 모두 체크될 시 다음버튼 활성화
    if (serviceAgree === true && privacyAgree === true) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }

  // 개인정보 처리방침 동의 클릭 
  const handleChange2 = () => {

    // 상태변화
    if (privacyAgree === true) {
      setPrivacyAgree(false);
    } else {
      setPrivacyAgree(true);
    }

    // 필수동의(서비스 및 개인정보) 모두 체크될 시 다음버튼 활성화
    if (serviceAgree === true && privacyAgree === true) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }


  // 마케팅 정보 수신(선택) 동의 클릭 
  const handleChange3 = () => {

    // 상태변화
    if (marketingAgree === true) {
      setMarketingAgree(false);
    } else {
      setMarketingAgree(true);
    }

    // 필수동의(서비스 및 개인정보) 모두 체크될 시 다음버튼 활성화
    if (serviceAgree === true && privacyAgree === true) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }

  return (
    <ReactModal isOpen={isOpen}>
      <div>
        <FontAwesomeIcon icon={agree ? faCircleCheckSolid : faCircleCheckRegular} onClick={handleAllChange} />  약관 전체 동의하기
      </div>
      <hr/>
      <div>
        <FontAwesomeIcon icon={serviceAgree ? faCircleCheckSolid : faCircleCheckRegular} onClick={handleChange1} />  서비스 이용약관 내용보기
      </div>

      <div>
        <FontAwesomeIcon icon={privacyAgree ? faCircleCheckSolid : faCircleCheckRegular} onClick={handleChange2} />  개인정보 처리방침 내용보기
      </div>
      <div>
        <FontAwesomeIcon icon={marketingAgree ? faCircleCheckSolid : faCircleCheckRegular} onClick={handleChange3} />  마케팅 정보 수신(선택) 내용보기
      </div>
      <Button variant="secondary" type="submit" disabled={disabled} onClick={handleClickSubmit}>다음</Button>
    </ReactModal>
  );
};

export default MyModal;