const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <h2>나만의 포켓몬</h2>
      <div className="poketball-container">
        {StCointainer}
        {Array(6)
          .fill(data.id)
          .map(({ index }) => (
            <div key={index} className="poketball-mode">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Pokebola-pokeball-png-0.png"
                alt=""
              />
            </div>
          ))}
          {/StContainer}
      </div>
    </div>
  );
};
