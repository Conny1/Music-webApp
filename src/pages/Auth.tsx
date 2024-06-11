import styled from "styled-components";
import { Login, Signup } from "../components";
import { useState } from "react";

const Main = styled.div`
  display: flex;
  height: 100vh;
  justify-content: center;
  // width: 100%;
  align-items: center;
  background-color: #eef1f6;
  margin: 0;
`;
const Container = styled.div`
  min-height: 60vh;
  width: 30%;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const BtnGroup = styled.div`
  display: flex;
  height: 50px;
  button {
    flex: 1;
    font-size: 15px;
    font-weight: bold;

    font-size: 15px;
    font-weight: bold;
    cursor: pointer;
    background-color: #009788;
    color: #fff;
    border: none;
  }
`;

const Auth = () => {
  const [login, setlogin] = useState(true);
  return (
    <Main>
      <Container>
        <BtnGroup>
          <button
            style={{ backgroundColor: login ? "red" : "#009788" }}
            onClick={() => setlogin(true)}
          >
            Log in
          </button>
          <button
            style={{ backgroundColor: !login ? "red" : "#009788" }}
            onClick={() => setlogin(false)}
          >
            Sign up
          </button>
        </BtnGroup>
        {login ? <Login /> : <Signup />}
      </Container>
    </Main>
  );
};

export default Auth;
