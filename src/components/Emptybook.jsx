import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Emptybook = (infos) => {
  const navigate = useNavigate();

  console.log("empty infos =", infos);

  return (
    <Card onClick={() => navigate(`/addreview/${infos.infos.id}`)}>
      <div>
        <Img src={infos.infos.thumbnail} alt="poster"></Img>
      </div>
      <Contents>
        <h2>Title: {infos.infos.title}</h2>
        <h2>Author: {infos.infos.author}</h2>
        <h2>Publisher: {infos.infos.publisher}</h2>
      </Contents>
    </Card>
  );
};

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
export default Emptybook;
