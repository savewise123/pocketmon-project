const PoketmonCard = ({ addPoketmon, deleteBtn, data }) => {
  const navigate = useNavigate();

  return (
    <StPoketmonBox onClick={() => navigate(`${data.id}`)}>
      <img src={data.img_url} alt="" />
      <div>{data.korean_name}</div>
      <p>{data.id}</p>
      {addPoketmon ? (
        <StButton
          onClick={(event) => {
            event.stopPropagation();
            addPoketmon(data.id);
          }}
        >
          추가
        </StButton>
      ) : (
        <StButton
          onClick={(event) => {
            event.stopPropagation();
            deleteBtn(data.id);
          }}
        >
          삭제
        </StButton>
      )}
    </StPoketmonBox>
  );
};
