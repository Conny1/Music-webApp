import { Link } from "react-router-dom";
import styled from "styled-components";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  padding: 10px;
  height: 45vh;
  gap: 20px;
  div {
    display: flex;
    flex-direction: column;
    color: black;
    height: 60px;
  }
  input {
    padding: 7px;
  }
  button {
    height: 40px;
    width: 100px;
    border-radius: 3px;
    font-size: 15px;
    font-weight: bold;
    cursor: pointer;
    background-color: #009788;
    color: #fff;
    border: none;
  }
`;
const More = styled.div`
  p {
    font-size: 12px;
  }
`;

const Login = () => {
  return (
    <Form>
      <div>
        <label htmlFor="email"> Email adress </label>
        <input type="email" id="email" required />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input type="password" id="password" required />
      </div>
      <button>Log in</button>
      <More>
        <p>
          Forgot password{" "}
          <Link style={{ color: "#007bff" }} to="/">
            Reset
          </Link>
        </p>
      </More>
    </Form>
  );
};

export default Login;
