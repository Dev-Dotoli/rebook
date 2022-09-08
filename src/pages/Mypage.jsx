import styled from "styled-components";
import logo from "../assets/logo_r.svg";
import { useNavigate } from "react-router-dom";
import Minibook from "../components/Minibook";
import Emptybook from "../components/Emptybook";

const Mypage = () => {
  const navigate = useNavigate();
  return (
    <Wrap>
      <Header>
        <Right>
          hello user <button onClick={() => navigate(`/search`)}>Search</button>
        </Right>
        <Logobox>
          <Logo src={logo} alt="logo" onClick={() => navigate(`/`)} />
        </Logobox>
      </Header>
      <Emptybook />
      <Emptybook />
      <Emptybook />
      <Emptybook />

      {/* <Minibook />
      <Minibook />
      <Minibook /> */}
    </Wrap>
  );
};

const Wrap = styled.div`
  /* border: 1px solid; */
  border-radius: 100px;
  text-align: center;
  background-color: #d3ebfb;
  box-shadow: 1px 1px 5px gray;
  margin: 5%;
  padding: 1%;
  max-width: 70%;
  min-width: 800px;
`;
const Header = styled.div`
  /* border: 1px dashed red; */
  display: block;
`;
const Right = styled.div`
  /* border: 1px dashed; */
  float: right;
  padding: 1% 5% 0 0;
  height: 10px;
`;
const Logobox = styled.div`
  /* border: 1px dashed purple; */
  display: block;
`;
const Logo = styled.img`
  margin: 0 0 0 20%;
  width: 200px;
  height: 200px;
`;

export default Mypage;
