import styled from "styled-components";
import logo from "../assets/logo_r.svg";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { _addSignup } from "../store/modules/signupSlice";

const Signup = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [cfm, setCfm] = useState("");

  const member = { username, password };
  // console.log(member);
  // console.log("타입", typeof (username, password));

  const onSubmitHandler = (e) => {
    if (password != cfm) {
      alert("비밀번호가 일치하지 않습니다!");
      return;
    }

    dispatch(_addSignup(member));
    console.log("포스트의 디스패치");
  };

  //console.log("username=", username, "password=", password, "cfm=", cfm);

  return (
    <Wrap>
      <Header>
        <Right>
          <button onClick={() => navigate(`/login`)}>log in</button>{" "}
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
          <input
            onChange={(ev) => {
              setCfm(ev.target.value);
            }}
            type="password"
            placeholder="Confirm Password"
          />
        </p>
        <p>
          <button>Register</button>
        </p>
      </form>
    </Wrap>
  );
};

// onClick={() => navigate(`/mypage`)}

const Wrap = styled.div`
  /* border: 1px solid; */
  border-radius: 100px;
  text-align: center;
  background-color: #d3ebfb;
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
const Signupbox = styled.div`
  /* border: 1px dashed blue; */
  display: block;
  padding: 5% 1% 0 0;
  height: 80%;
  min-height: 200px;
`;

export default Signup;
