import MOCK_DATA from "./mock_data.js";

const PoketmonList = () => {
  return (
    <div>
      {MOCK_DATA.map((poketmon) => (
        <div key={poketmon.id}>
          <img src={poketmon.img_url} alt="" />
          <div>{poketmon.korean_name}</div>
          <p>{poketmon.id}</p>
          <button>추가</button>
          <button>수정</button>
          <button>삭제</button>
        </div>
      ))}
    </div>
  );
};

export default PoketmonList;
