import { Link } from "react-router-dom";

//24.11.27 지은 [완료] : createBrowserRouter 형식으로 적용
export default function Header() {
  return (
    <div>
      <Link to="/">
        <p>로고(홈)</p>
      </Link>
      <Link to="/about">
        <p>about</p>
      </Link>
      <Link to="/room">
        <p>room</p>
      </Link>
      <Link to="/special">
        <p>special</p>
      </Link>
      <Link to="/reservation">
        <p>reservation</p>
      </Link>
      <Link to="/community">
        <p>community</p>
      </Link>
      <Link to="/user">
        <p>user</p>
      </Link>
      <Link to="/test">
        <p>spring boot. back-end 서버 연결 테스트</p>
      </Link>
    </div>
  );
}
