import { useState } from "react";
const Home = () => {
  const [like, setLike] = useState(1);
  const [dislike, setDislike] = useState(1);
  const handleClick = () => {
    setLike(like + 1);
  };
  const handleDislike = () => {
    setDislike(dislike + 1);
  };

  return (
    <div className="home">
      <h3>Contact List</h3>
      <h3>
        like : {like}, Dislike : {dislike}
      </h3>
      <button onClick={handleClick}>Like</button>
      <button onClick={handleDislike}>Dislike</button>
    </div>
  );
};

export default Home;
