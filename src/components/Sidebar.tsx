import styled from "styled-components";
import SideBarsongs from "./SideBarsongs";

const SideBar = styled.div`
  width: 25%;
  max-width: 400px;
  position: fixed;
  right: 0;
  height: 100%;
  background-color: #f9fafc;
  h1 {
    font-size: 18px;
    margin-left: 10px;
  }
`;
const Songs = styled.section``;

const Sidebar = () => {
  return (
    <SideBar>
      <h1>Top Picks</h1>

      <Songs>
        <SideBarsongs />
        <SideBarsongs />
        <SideBarsongs />
        <SideBarsongs />
      </Songs>
    </SideBar>
  );
};

export default Sidebar;
