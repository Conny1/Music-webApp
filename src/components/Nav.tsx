import { Link } from "react-router-dom";
import styled from "styled-components";

const Navbar = styled.div`
  background-color: #fff;
  margin: -5px;
  flex: 1;
`;
const UpperSection = styled.div`
  color: black;
  display: flex;
  justify-content: space-between;
`;
const LogoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 40%;
  max-width: 400px;
  h1 {
    color: #009788;
    font-weight: 500;
    font-size: 25px;
  }
  input {
    padding: 5px;
    border: none;
  }
`;
const AuthContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 40%;
  max-width: 250px;
  margin-right: 10px;
`;
const BtnLink = styled(Link)`
  border-radius: 3px;
  width: 100px;
  font-size: 15px;
  font-weight: bold;
  cursor: pointer;
  background-color: #009788;
  color: #fff;
  border: none;
  padding: 3px;
  text-decoration: none;
  text-align: center;
`;
const LoweSection = styled.div`
  width: 100%;
  background-color: #c9d7e2;
  div {
    border-radius: 5px;
    width: 40%;
    justify-content: space-between;
    display: flex;
    padding: 10px;
    color: black;
    height: 70px;
    align-items: flex-end;
  }
  section {
    padding: 6px;

    &:hover {
      background-color: #b5d0d9;
    }
  }
`;
const RouteLinks = styled(Link)`
  text-decoration: none;
  color: black;
  text-transform: capitalize;
  font-weight: 500;
  &:hover {
    color: #009788;
  }
`;

const Nav = () => {
  const routes = ["discover", "browse", "search", "createplaylist"];
  return (
    <Navbar>
      <UpperSection>
        <LogoContainer>
          <h1>Groove</h1>
          <div>
            <input
              type="search"
              name="search"
              id="search"
              required
              placeholder="Search songs, albums ..."
            />
          </div>
        </LogoContainer>
        <AuthContainer>
          <BtnLink
            style={{ backgroundColor: "inherit", color: "black" }}
            to="/auth"
          >
            Sign up
          </BtnLink>
          <BtnLink to="/auth">Log in</BtnLink>
        </AuthContainer>
      </UpperSection>
      <LoweSection>
        <div>
          {routes.map((route) => {
            return (
              <section key={route}>
                <RouteLinks to={`/${route}`}> {route} </RouteLinks>
              </section>
            );
          })}
        </div>
      </LoweSection>
    </Navbar>
  );
};

export default Nav;
