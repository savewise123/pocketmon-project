import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const StContainer = styled.div`
  width: 100%;
  height: 90px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StImg = styled.img`
  width: 600px;
  margin: 20px;
`;

const StButton = styled.button`
  background-color: red;
  border: none;
  color: white;
  padding: 15px 20px;
  border-radius: 8px;
  font-size: 20px;
`;

const Home = () => {
  const navigate = useNavigate();

  return (
    <div>
      <StContainer className="app-container">
        <StImg
          src="https://cdn.worldvectorlogo.com/logos/pokemon-23.svg"
          alt=""
        />
        <StButton onClick={() => navigate("/dex")}>
          포켓몬 도감 이동
        </StButton>
      </StContainer>
    </div>
  );
};

export default Home;
