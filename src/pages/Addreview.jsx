import styled from "styled-components";
import logo from "../assets/logo_r.svg";
import { useNavigate, useParams } from "react-router-dom";
import Emptybook from "../components/Emptybook";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { _getinfos } from "../store/modules/infosSlice";

const Addreview = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const infos = useSelector((state) => state.infos.infos.infos);

  let params = useParams();

  const filter = infos.filter((infos) => infos.id === Number(params.id));

  useEffect(() => {
    dispatch(_getinfos(params.id));
  }, []);

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

      {filter?.map((infos) => {
        return <Emptybook key={infos.id} infos={infos} />;
      })}
      <Reviewbox>
        <Textarea placeholder="input review"></Textarea>
        <Buttonbox>
          <button>Add</button>
        </Buttonbox>
      </Reviewbox>
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
const Reviewbox = styled.div`
  /* border: 1px dashed blue; */
  display: block;
  padding: 5% 1% 0 0;
  height: 80%;
  min-height: 300px;
`;
const Textarea = styled.textarea`
  /* display: block; */
  width: 70%;
  height: 200px;
`;
const Buttonbox = styled.div`
  /* border: 1px dashed blue; */
  margin: 1% 0 0 0;
`;
export default Addreview;
