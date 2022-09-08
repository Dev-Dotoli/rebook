import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Minibook = (books) => {
  const navigate = useNavigate();

  return (
    <Card
      onClick={() => {
        navigate(`/book/${books.books.id}`);
        // navigate(`/book/${books.books.id}`, { state: books });
      }}
    >
      <div>
        <Img src={books.books.thumbnail} alt="poster"></Img>
      </div>
      <Contents>
        <h3>title:{books.books.title}</h3>
        <h3>author:{books.books.author}</h3>
        <h3>publisher:{books.books.publisher}</h3>
      </Contents>
    </Card>
  );
};

export default Minibook;

const Card = styled.div`
  /* border: 1px dashed red; */
  border-radius: 60px;
  display: flex;
  width: 90%;
  height: 10%;
  margin: 1%;
  padding: 4%;
`;
const Img = styled.img`
  /* border: 1px solid; */
  border-radius: 40px;
  background-color: white;
  box-shadow: 1px 1px 5px gray;
  width: 140px;
  height: 140px;
  float: left;
  margin-right: 10px;
`;
const Contents = styled.div`
  /* border: 1px solid green; */
  border-radius: 40px;
  background-color: white;
  box-shadow: 1px 1px 5px gray;

  width: 80%;
  height: 140px;
  text-align: center;
  display: inline-block;
  padding: 0 0 0 2%;
`;
