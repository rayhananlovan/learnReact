const Home = () => {
  let like = 0;
  const handleClick = (e) => {
    console.log("Halo", e);
  };
  const handleClicklagi = (name, e) => {
    console.log("Halo", name);
    console.log(e);
  };

  return (
    <div className="home">
      <h3>Contact List</h3>
      <h3>like = 0</h3>
      <button onClick={handleClick}>Like</button>
      <button onClick={(e) => handleClicklagi("rayhan", e)}>Hai</button>
    </div>
  );
};

export default Home;
