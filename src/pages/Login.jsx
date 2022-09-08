import styled from "styled-components";
import logo from "../assets/logo_r.svg";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { call_login } from "../store/modules/loginSlice";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const member = { username, password };

  const onSubmitHandler = () => {
    if (username === "" || password === "") {
      alert("아이디와 비밀번호를 입력해주세요");
      return;
    } else {
      dispatch(call_login(member));
    }
  };

  return (
    <Wrap>
      <Header>
        <Right>
          <button onClick={() => navigate(`/signup`)}>sign up</button>{" "}
          <button onClick={() => navigate(`/search`)}>Search</button>
        </Right>
        <Logobox>
          <Logo src={logo} alt="logo" onClick={() => navigate(`/`)} />
        </Logobox>
      </Header>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          onSubmitHandler(member);
        }}
      >
        <h3>ID</h3>
        <input
          onChange={(ev) => {
            setUsername(ev.target.value);
          }}
          type="text"
          placeholder="Id"
        />
        <h3>password</h3>
        <input
          onChange={(ev) => {
            setPassword(ev.target.value);
          }}
          type="password"
          placeholder="Password"
        />
        <p>
          <button>Log in</button>
        </p>
      </form>
    </Wrap>
  );
};

const Wrap = styled.div`
  /* border: 1px solid; */
  border-radius: 100px;
  background-color: #d3ebfb;
  box-shadow: 1px 1px 5px gray;
  text-align: center;
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
  margin: 5% 0 0 20%;
  width: 300px;
  height: 300px;
`;
const Signupbox = styled.div`
  /* border: 1px dashed blue; */
  padding: 5% 1% 0 0;
  height: 10%;
  min-height: 200px;
`;
export default Login;
