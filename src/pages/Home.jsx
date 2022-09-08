import "./Home.css";
import Minibook from "../components/Minibook";
import styled from "styled-components";
import logo from "../assets/logo_r.svg";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { _getbooks } from "../store/modules/bookSlice";

const Home = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(_getbooks());
  }, [dispatch]);

  const books = useSelector((state) => state.books.books);

  console.log("books =", books);

  // const hyun = books; //local

  return (
    <Wrap>
      <Header>
        <Right>
          <button onClick={() => navigate(`/login`)}>log in</button>{" "}
          <button onClick={() => navigate(`/signup`)}>sign up</button>{" "}
          <button onClick={() => navigate(`/search`)}>Search</button>
        </Right>
        <Logobox>
          <Logo src={logo} alt="logo" />
        </Logobox>
      </Header>

      {books && (
        <Bookbox>
          {books.map((minibooks) => {
            return (
              <div key={minibooks.id}>
                <Minibook books={minibooks} />
              </div>
            );
          })}
        </Bookbox>
      )}
    </Wrap>
  );
};

export default Home;

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
  margin: 5% 0 0 20%;
  width: 300px;
  height: 300px;
`;
const Bookbox = styled.div`
  /* border: 1px dashed; */
  padding: 0 1% 0 5%;
`;
