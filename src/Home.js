import { useState } from "react";
const Home = () => {
  const [person, setPerson] = useState({
    firstname: "Rayhan",
    lastname: "Nurcholis",
    age: "16",
    address: {
      address1: "surakarta",
      address2: "boyolali",
    },
  });

  const handleUpdateAge = () => {
    setPerson({
      firstname: "Name",
      lastname: "Name",
      age: "20",
    });
  };

  const handleUpdateAddress = () => {
    setPerson({
      firstname: "Name",
      lastname: "Name",
      age: "22",
      address: {
        firstname: "Rayhan",
        lastname: "Nurcholis",
        age: "16",
        address: {
          address1: "surakarta",
          address2: "boyolali",
          address2: "surabaya",
        },
      },
    });
  };

  return (
    <div className="home">
      <h3>Contact List</h3>
      <div>Firstname: {person.firstname}</div>
      <div>Lastname: {person.lastname}</div>
      <div>Age: {person.age}</div>
      <div>Address: {person.adddress}</div>
      <ul>
        <li>{person.address.address1}</li>
        <li>{person.address.address2}</li>
      </ul>
      <button onClick={handleUpdateAge}>Update Age</button>
      <button onClick={handleUpdateAddress}>Update Address</button>
    </div>
  );
};

export default Home;
