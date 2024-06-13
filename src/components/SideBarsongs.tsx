import styled from "styled-components";
import pic from "../images/pic.png";

const Container = styled.div`
  border-bottom: 1px solid gainsboro;
  height: 70px;
  display: flex;
  align-items: center;
  gap: 25px;
`;
const ImageCon = styled.div`
  height: 60px;
  width: 60px;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 10px;
  }
`;
const SongInfoContainer = styled.div`
  height: fit-content;
  h4 {
    margin-bottom: 0;
    font-size: 15px;
    font-weight: 400;
  }
  p {
    margin-top: 0;
    font-size: 12px;
    color: grey;
  }
`;

const SideBarsongs = () => {
  return (
    <Container>
      <ImageCon>
        <img src={pic} alt="pic" />
      </ImageCon>
      <SongInfoContainer>
        <h4>Song name</h4>
        <p>Artist name</p>
      </SongInfoContainer>
    </Container>
  );
};

export default SideBarsongs;
