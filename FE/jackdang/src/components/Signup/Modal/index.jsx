import ReactModal from "react-modal";

const MyModal = ({ isOpen, onSubmit, onCancel }) => {
  //동의
  const handleClickSubmit = () => {
    onSubmit();
  };
  
  //취소
  // const handleClickCancel = () => {
  //   onCancel();
  // };


  return (
    <ReactModal isOpen={isOpen}>
      <div>V 약관 전체 동의하기</div>
      <hr/>
      <div>
        V 서비스 이용약관 내용보기
      </div>
      <div>
        V 개인정보 처리방침 내용보기
      </div>
      <div>
        V 마케팅 정보 수신(선택) 내용보기
      </div>
      <div>
        <button onClick={handleClickSubmit}>다음</button>
        {/* <button onClick={handleClickCancel}>취소</button> */}
      </div>

    </ReactModal>
  );
};

export default MyModal;