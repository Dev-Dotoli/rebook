import logo from "../assets/logo_r.svg";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { _getinfos } from "../store/modules/infosSlice";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Emptybook from "../components/Emptybook";

const Search = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [input, setInput] = useState("");

  const searchClickHandler = (e) => {
    dispatch(_getinfos(input));
  };

  const infos = useSelector((state) => state.infos.infos.infos);

  console.log("infos =", infos);

  return (
    <Wrap>
      <Header>
        <Right>
          <button onClick={() => navigate(`/mypage`)}>log in</button>{" "}
          <button onClick={() => navigate(`/signup`)}>sign up</button>
          {"  "}
          <button onClick={() => navigate(`/search`)}>Search</button>
        </Right>
        <Logobox>
          <Logo src={logo} alt="logo" onClick={() => navigate(`/`)} />
        </Logobox>
      </Header>
      <Input
        onChange={(e) => {
          setInput(e.target.value);
        }}
        type="text"
        placeholder="search"
      ></Input>
      <button
        onClick={(e) => {
          searchClickHandler();
          e.preventDefault();
        }}
      >
        search
      </button>
      <Bookbox>
        {infos?.map((infos) => {
          return <Emptybook key={infos.id} infos={infos} />;
        })}
      </Bookbox>
    </Wrap>
  );
};

export default Search;

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
const Input = styled.input`
  width: 40%;
  margin: 3% 1% 0 0;
`;
const Bookbox = styled.div`
  /* border: 1px dashed; */
  padding: 0 1% 0 5%;
`;
