import styled from "styled-components";
import logo from "../assets/logo_r.svg";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

import { _getbooks } from "../store/modules/bookSlice";
import Minibook from "../components/Minibook";

const Book = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  let params = useParams();
  const books = useSelector((state) => state.books.books);

  const filter = books.filter((books) => books.id === Number(params.id));

  useEffect(() => {
    dispatch(_getbooks());
  }, [dispatch]);

  return (
    <Wrap>
      <Header>
        <Right>
          <button onClick={() => navigate(`/login`)}>log in</button>{" "}
          <button onClick={() => navigate(`/signup`)}>sign up</button>{" "}
          <button onClick={() => navigate(`/search`)}>Search</button>
        </Right>
        <Logobox>
          <Logo src={logo} alt="logo" onClick={() => navigate(`/`)} />
        </Logobox>
      </Header>
      <div>
        {filter?.map((books) => {
          return <Minibook key={books.id} books={books} />;
        })}
      </div>

      <Reviewbox>
        <div>
          {filter?.map((books) => {
            return (
              <Textarea placeholder="review 내용">{books.review}</Textarea>
            );
          })}
        </div>
        <p>
          <Input type="text" placeholder="input comment" />
        </p>
        <P>
          <button>Add</button>
        </P>
      </Reviewbox>
      <Footer>
        <p>
          <Input type="text" placeholder="comment" />
        </p>
        <P>
          <button>Patch</button>
          <button>Delete</button>
          <button>recomment</button>
        </P>
        <p>
          <Input type="text" placeholder="recomment" />
        </p>
        <P>
          <button>Patch</button>
          <button>Delete</button>
        </P>
      </Footer>
    </Wrap>
  );
};

export default Book;

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

const Reviewbox = styled.div`
  /* border: 1px dashed blue; */
  display: block;
  padding: 5% 1% 0 0;
  height: 80%;
  min-height: 250px;
`;
const Textarea = styled.textarea`
  /* display: block; */
  width: 70%;
  height: 200px;
`;
const Footer = styled.div`
  /* border: 1px dashed red; */
`;
const Input = styled.input`
  width: 50%;
`;
const P = styled.p`
  display: block;
`;
