import { useParams, useNavigate } from "react-router-dom";
import MOCK_DATA from "../data/MOCK_DATA";
import {
  DetailButton,
  DetailImg,
  DetailInfo,
  DetailMain,
  DetailTitle,
} 

const PokemonDetail = () => {
  const { id } = useParams();
  const nav = useNavigate();

  const selectedPokemon = MOCK_DATA.find(
    (pokemon) => pokemon.id === Number(id)
  );

  return (
    <DetailMain>
      <DetailImg src={selectedPokemon.img_url} />
      <DetailTitle>{selectedPokemon.korean_name}</DetailTitle>
      <DetailInfo>{selectedPokemon.description}</DetailInfo>
      <DetailButton
        onClick={() => {
          nav(-1);
        }}
      >
        뒤로 가기
      </DetailButton>
    </DetailMain>
  );
};

export default Detail;
