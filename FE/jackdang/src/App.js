import 'bootstrap/dist/css/bootstrap.min.css';
import * as Pages from './pages';
import { Route, Routes } from 'react-router-dom';
import Nav from './components/common/Nav';

function App() {
  return (
    <>
      {/* 로그인 회원가입 페이지 Nav 제거 */}
      { window.location.pathname === '/' || (
        <>
          <Nav />
        </>
      )}
      <Routes>
        <Route path="/" element={<Pages.LoginPage />} />
        <Route path="/signup" element={<Pages.SignupPage />} />
      </Routes>
    </>
  );
}

export default App;
